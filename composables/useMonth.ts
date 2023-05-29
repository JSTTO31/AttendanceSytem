


export const useMonth = (number: number) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    

    const monthName = monthNames[number];
    
    return monthName
}