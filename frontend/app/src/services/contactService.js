import { api } from "./api";

const sendMessage = async (data) => {
    // data deve ser: { name: "...", email: "...", message: "..." }
    const response = await api.post('/api/contact/', data);
    return response
}

const ContactService = {
    sendMessage,
};

export default ContactService;