import React, { useState, useEffect } from "react";
import * as z from "zod";
import useStore from "../../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Card, CardTitle, CardHeader } from "../../components/ui/Card";

const RegisterSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  firstName: z.string({ required_error: "Name is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});

const SignUp = () => {
  const { user } = useStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  useEffect(() => {
    user && navigate("/");
  }, [user]);

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-10">
      <Card className="w-[400px] bg-white dark:bg-black/20 shadow-md overflow-hidden">
        <div className="p-6 md:-8">
          <CardHeader className="py-0">
            <CardTitle className="mb-8 text-center dark:text-white">
              Create Account
            </CardTitle>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
