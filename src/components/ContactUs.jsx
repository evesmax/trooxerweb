// filepath: /Users/alex/Desktop/trooxer/src/components/ContactUs.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    NombreEmpresa: '',
    NombreContacto: '',
    PaginaWeb: '',
    Telefono: '',
    Whatsapp: '',
    Mensage: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5172/api/contact', formData);
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contactanos
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>

        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <h1 className="title mt-20 mb-5">Llena el formulario para que nosotros te contactemos:</h1>
          <div className="mb-1">
            <label htmlFor="NombreEmpresa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre de la empresa:</label>
            <input type="text" id="NombreEmpresa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
          </div>

          <div className="mb-1">
            <label htmlFor="NombreContacto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre de contacto:</label>
            <input type="text" id="NombreContacto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label htmlFor="PaginaWeb" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pagina web:</label>
            <input type="text" id="PaginaWeb" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label htmlFor="Telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Telefono:</label>
            <input type="text" id="Telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
          </div>

          <div className="mb-1">
            <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">WhatsApp:</label>
            <input type="text" id="whatsapp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label htmlFor="Mensage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mensaje:</label>
            <textarea id="Mensage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enviar
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
