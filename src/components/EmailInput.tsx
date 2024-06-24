import { Form, Input } from "antd";

const EmailInput = () => {
    // Функция для валидации email-адреса
    const validateEmail = (rule:any, value:any, callback:any) => {
      const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
      if (!emailRegex.test(value)) {
        callback('Неверный формат email-адреса');
      } else {
        callback();
      }
    };
  
    return (
      <Form.Item
        className="h-[60px]"
        name="email"
       
        rules={[
          { required: true, message: 'Email-адрес обязателен' },
          { validator: validateEmail },
        ]}
      >
        <Input placeholder="Введите email-адрес" />
      </Form.Item>
    );
  };

  export default EmailInput