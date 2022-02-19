import axios from "axios"
import { useEffect, useState } from "react"

interface DatasIbge{
    id: number;
    sigla: string;
}

interface DatasIbgeCitys{
    id: number;
    nome: string;
}

function DatasIbgeApi() {
    const [ufs, setUfs] = useState<DatasIbge[]>([])
    const [citys, setCitys] = useState<DatasIbgeCitys[]>([])
    const [storeUFS, setStoreUFS] = useState<string>('')
    const [storeCitys, setStoreCitys] = useState<string>('')

    useEffect(() => {
        async function handleUfIBGE() {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            const { data } = response

            setUfs(data)
        }
        handleUfIBGE()
    }, [])

    useEffect(() => {
        async function handleIBGECity(){
            const response = await             axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${storeUFS}/municipios`)
            const data = await response.data

            setCitys(data)
        }
        handleIBGECity()
    }, [storeUFS])

    return (
        <>
            <div>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="uf">Estado (UF)</label>
                        <select
                            name="uf"
                            id="uf"
                            value={storeUFS}
                            onChange={event => setStoreUFS(event.target.value)}
                        >
                            <option value="0">Selecione uma(UF)</option>
                            {ufs.map(uf => (
                                <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="city">Cidade</label>
                        <select
                            name="city"
                            id="city"
                            value={storeCitys}
                            onChange={event => setStoreCitys(event.target.value)}
                        >
                            <option value="0">Selecione uma cidade</option>
                            {citys.map(city => (
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )

}