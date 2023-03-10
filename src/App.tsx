import * as C from 'App.styles'
import { IItem } from 'types/IItem'
import { categories } from 'data/categories'
import { items } from 'data/items'
import { useEffect, useState } from 'react'
import { getCurrentMonth, filterListByMonth } from 'helpers/dateFilter'
import TableArea from 'components/TableArea'
import InfoArea from 'components/InfoArea'
import InputArea from 'components/InputArea'

const App = () => {
  const [list, setList] = useState<IItem[]>(items);
  const [filteredList, setFilteredList] = useState<IItem[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  // Este useEffect realiza o cálculo das despesas e dos proveitos, para mostrar na InfoArea
  useEffect(() => {
    let incomeCount = filteredList.reduce((sum, record) => {
      return categories[record.category].expense ? sum : sum + record.value;
    }, 0)
    setIncome(incomeCount);
    let expenseCount = filteredList.reduce((sum, record) => {
      return !categories[record.category].expense ? sum : sum + record.value;
    }, 0)
    setExpense(expenseCount);
  }, [filteredList])

  const handleAddItem = (item: IItem) => {
    let newList = [...list, item];
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
      
      <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />

      <InputArea onAdd={handleAddItem} />

      <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  )
}

export default App;