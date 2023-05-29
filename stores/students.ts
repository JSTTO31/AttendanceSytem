import { log } from "console";

interface Student {
    id: number;
    name: string;
    image: string;
    date_of_birth: string;
    gender: string;
    address?: string;
    phone_number?: string;
    email?: string;
    created_at: string;
    updated_at: string;
}

interface CreateStudent{
    name: string;
    date_of_birth: string;
    gender: string;
    address?: string;
    phone_number?: string;
    email?: string;
}

export const useStudentStore = defineStore('student', {
    state: () => ({
        students: [] as Student[]
    }),
    getters: {},
    actions: {
        async getAll(){
            const api = useAPI()
            try {
                const response = await api.get('/students')
                this.students = response.data
                return response;
            } catch (error) {
                console.log(error);
                
            } 
        },
        async create(information: CreateStudent){
            const api = useAPI()
            try {
                const response = await api.post('/students', information)
                this.students.unshift(response.data)
                
                return response;
            } catch (error) {
                console.log(error);
                
            }

        }
    }
})