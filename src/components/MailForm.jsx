import { useState } from "react";
import MessageBox from "./MessageBox";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "./styles/FormStyles";

function MailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Usado para feedback de envio
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
    <FormContainer>
      <FormTitle>Fale Conosco</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem ou Comentário</Label>
          <Textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua menssagem..."
            required
          ></Textarea>
        </FormGroup>
        <SubmitButton type="submit" disabled={status === "Enviando..."}>
          {status === "Enviando..." ? "Enviando..." : "Enviar Mensagem"}
        </SubmitButton>
      </form>
      <MessageBox
        message={status}
        type={statusType}
        onClose={() => setStatus("")}
      />
    </FormContainer>
  );
}

export default MailForm;
