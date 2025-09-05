import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

export default function CreatePage() {
  
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  
  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    reset()
  };


  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded w-80">
      <div className="mb-2">
        <label className="block text-sm">Tarea:</label>
        <input
          type="text"
          {...register("tarea", { required: "El campo tarea es obligatorio" })}
          className="border p-1 w-full rounded"
        />
        {errors.tarea && (
          <p className="text-red-500 text-sm">{errors.tarea.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
    
    </div>
        
  );
}
