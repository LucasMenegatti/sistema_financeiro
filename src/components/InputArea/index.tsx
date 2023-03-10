import { dateToInputDate, newDateAdjusted } from 'helpers/dateFilter'
import { useState } from 'react'
import { IItem } from 'types/IItem'
import * as C from './styles'
import { categories } from 'data/categories'

type Props = {
    onAdd: (item: IItem) => void
}

const InputArea = ({ onAdd }: Props) => {
    const getTodayDate = () => {
        const Hoje = new Date();
        Hoje.toLocaleDateString('pt-br');
        return Hoje;
    }

    const [inpDate, setInpDate] = useState(dateToInputDate(getTodayDate()))
    const [inpCategory, setInpCategory] = useState('')
    const [inpTitle, setInpTitle] = useState('')
    const [inpValue, setInpValue] = useState('')

    const [catEmpty, setCatEmpty] = useState(false)
    const [titleEmpty, setTitleEmpty] = useState(false)
    const [valueEmpty, setValueEmpty] = useState(false)

    let categoryKeys: string[] = Object.keys(categories);
    
    const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(!inpCategory || !inpTitle || !inpValue) return
        let newItem: IItem = {
            date: newDateAdjusted(inpDate),
            category: inpCategory,
            title: inpTitle,
            value: parseFloat(inpValue)
        };
        onAdd(newItem);
        resetForm();
    }

    const resetForm = () => {
        setInpDate(inpDate)
        setInpCategory('')
        setInpTitle('')
        setInpValue('')

        setCatEmpty(false)
        setTitleEmpty(false)
        setValueEmpty(false)
    }
    
    return (
        <C.Container>
            <C.Form>
                <C.FormItem>
                    <C.ItemLabel>Data</C.ItemLabel>
                    <C.FormInput
                        type={'date'}
                        value={inpDate}
                        onChange={e => {setInpDate(e.target.value)}}
                        empty={false}
                    />
                </C.FormItem>
                <C.FormItem>
                    <C.ItemLabel>Categoria</C.ItemLabel>
                    <C.FormSelect 
                        value={inpCategory}
                        onChange={e => {
                            e.target.value ? setCatEmpty(false) : setCatEmpty(true);
                            setInpCategory(e.target.value)
                        }}
                        onBlur={e => e.target.value ? setCatEmpty(false) : setCatEmpty(true)}
                        empty={catEmpty}
                    >
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </C.FormSelect>
                </C.FormItem>
                <C.FormItem>
                    <C.ItemLabel>Título</C.ItemLabel>
                    <C.FormInput
                        type={'text'}
                        value={inpTitle}
                        onChange={e => {
                            e.target.value ? setTitleEmpty(false) : setTitleEmpty(true);
                            setInpTitle(e.target.value);
                        }}
                        onBlur={e => e.target.value ? setTitleEmpty(false) : setTitleEmpty(true)}
                        empty={titleEmpty}
                    />
                </C.FormItem>
                <C.FormItem>
                    <C.ItemLabel>Valor</C.ItemLabel>
                    <C.FormInput 
                        type={'number'}
                        value={inpValue}
                        onChange={e => {
                            e.target.value ? setValueEmpty(false) : setValueEmpty(true);
                            setInpValue(e.target.value)
                        }}
                        onBlur={e => e.target.value ? setValueEmpty(false) : setValueEmpty(true)}
                        empty={valueEmpty}
                    />
                </C.FormItem>
                <button onClick={e => handleAddEvent(e)}>Adicionar</button>
            </C.Form>
        </C.Container>
    )    
}

export default InputArea;