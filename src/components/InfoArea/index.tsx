import * as C from './styles'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { formatCurrentMonth } from 'helpers/dateFilter'
import ResumeItem from 'components/ResumeItem'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    
    // Aumenta ou diminui o mês, levando em conta o mês atual, e chama a função onMonthChante que está no App.tsx
    // Esta função espera um valor (value), que é quantos meses devem ser aumentados ou diminuídos
    const handleMonthChange = (value: number) => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() + value)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={e => handleMonthChange(-1)}><AiOutlineArrowLeft /></C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={e => handleMonthChange(1)}><AiOutlineArrowRight /></C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title={'Receitas'} value={income} />
                <ResumeItem title={'Despesas'} value={expense} />
                <ResumeItem color={(income-expense) < 0 ? 'red' : 'green'} title={'Balanço'} value={income - expense} />
            </C.ResumeArea>
        </C.Container>
    )
}

export default InfoArea;