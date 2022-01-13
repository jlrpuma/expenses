import axios from "axios";

export default {
    getAll: async () => {
        // backend is not implemented yet
        // const response = await axios.get();
        const response = {
            data: [
                {
                    id: 1,
                    name: 'Gas',
                    cost: 5000,
                    date: '20/01/2019',
                    description: 'pago de Gas mes X',
                    category: 'Servicios'
                },
                {
                    id: 2,
                    name: 'Electricidad',
                    cost: 290000,
                    date: '24/02/2019',
                    description: 'pago de Electricidad mes X',
                    category: 'Servicios'
                }
                ,
                {
                    id: 3,
                    name: 'Comida Mascotas',
                    cost: 90000,
                    date: '26/03/2019',
                    description: 'Comida Conchita',
                    category: 'Mascotas'
                },
                {
                    id: 4,
                    name: 'Gas',
                    cost: 5000,
                    date: '20/01/2019',
                    description: 'pago de Gas mes X',
                    category: 'Servicios'
                },
                {
                    id: 5,
                    name: 'Electricidad',
                    cost: 290000,
                    date: '24/02/2019',
                    description: 'pago de Electricidad mes X',
                    category: 'Servicios'
                },
                {
                    id: 6,
                    name: 'Comida Mascotas',
                    cost: 90000,
                    date: '26/03/2019',
                    description: 'Comida Conchita',
                    category: 'Mascotas'
                }
            ]
        }
        return response.data
    }
}