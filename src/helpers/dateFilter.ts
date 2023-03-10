import { IItem } from "types/IItem";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: IItem[], date: string): IItem[] => {
    let newList: IItem[] = [];
    let [year, month] = date.split('-');
    newList = list.filter(item => (item.date.getFullYear() === parseInt(year)) && (item.date.getMonth()+1 === parseInt(month)))
    return newList;
}

export const formatDate = (date: Date):string => {
    let year = date.getFullYear();
    let month = String(date.getMonth()+1);
    let day = String(date.getDay());
    return `${day.padStart(2,'0')}/${month.padStart(2,'0')}/${year}`;
}

export const formatCurrentMonth = (currentMonth: string):string => {
    let [year, month] = currentMonth.split('-');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month)-1]} - ${year}`
}

export const dateToInputDate = (date: Date):string => {
    let year = date.getFullYear();
    let month = String(date.getMonth()+1);
    let day = String(date.getDay()-2);
    return `${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`;
}

export const newDateAdjusted = (date: string):Date => {
    let [year, month, day] = date.split('-');
    return new Date(Number(year), Number(month)-1, parseInt(day))
}