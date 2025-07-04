import { useState } from "react";
import MessageBox from "./MessageBox";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function MailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' ou 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    setStatusType("");
    try {
      // Validação básica do lado do cliente antes de enviar
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("Por favor, preencha todos os campos obrigatórios.");
        setStatusType("error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setStatus("Por favor, insira um endereço de e-mail válido.");
        setStatusType("error");
        return;
      }

      const response = await fetch(`${API_URL}/api/submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao enviar a mensagem.");
      }

      // const data = await response.json(); // Se precisar dos dados de retorno do POST
      setStatus("Mensagem enviada com sucesso!");
      setStatusType("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
      setStatusType("error");
      console.error("Erro no envio:", error);
    } finally {
      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-inter">
        Fale Conosco
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensagem ou Comentário
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-y"
            placeholder="Sua mensagem sobre economia circular..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === "Enviando..."}
        >
          {status === "Enviando..." ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
      <MessageBox
        message={status}
        type={statusType}
        onClose={() => setStatus("")}
      />
    </div>
  );
}

export default MailForm;
