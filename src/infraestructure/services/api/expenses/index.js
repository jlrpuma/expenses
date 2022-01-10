import axios from "axios";

export default {
    getAll: async () => {
        // backend is not implemented yet
        // const response = await axios.get();
        const response = {
            data: [
                {
                    id: 1,
                    name: 'Gas'
                },
                {
                    id: 2,
                    name: 'Electricidad'
                }
                ,
                {
                    id: 3,
                    name: 'Internet'
                }
            ]
        }
        return response.data
    }
}