import React, { useState } from "react";
import { toast } from "sonner";
import Input from "./input";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { BiLoader } from "react-icons/bi";
import api from "../../libs/apiCall";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const submitPasswordHandler = async (data) => {
    try {
      setLoading(true);

      const { data: res } = await api.put(`/user/change-password`, data);

      if (res?.status === "success") {
        toast.success(res?.success);
      }
    } catch (error) {
      console.error("Something went wrong :", error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-20">
      <form onSubmit={handleSubmit(submitPasswordHandler)}>
        <div className="">
          <p className="text-xl font-bold text-black dark:text-white mb-1">
            Change Password
          </p>
          <span className="labelStyles">
            This will be used to log into your account and complete high
            severity actions.
          </span>

          <div className="mt-6">
            <Input
              disabled={loading}
              type="password"
              className="inputStyle"
              name="currentPassword"
              label="Current Password"
              {...register("currentPassword", {
                required: "Current Password is required!",
              })}
              error={
                errors.currentPassword ? errors.currentPassword.message : ""
              }
            />
            <Input
              disabled={loading}
              type="password"
              name="newPassword"
              className="inputStyle"
              label="New Password"
              {...register("newPassword", {
                required: "New Password is required!",
              })}
              error={errors.newPassword ? errors.newPassword.message : ""}
            />

            <Input
              disabled={loading}
              type="password"
              name="newPassword"
              className="inputStyle"
              label="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required!",
                validate: (val) => {
                  const { newPassword } = getValues();
                  return newPassword === val || "Password does't match!";
                },
              })}
              error={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-6 justify-end my-5 pb-10 border-b-2 border-gray-200 dark:border-gray-800">
          <Button
            variant="outline"
            // loading={loading}
            type="reset"
            className="px-6 bg-transparent text-black dark:text-white border bordre-gray-200 dark:border-gray-800"
          >
            Reset
          </Button>

          <Button
            // loading={loading}
            type="submit"
            className="px-8 bg-violet-800 text-white"
          >
            {loading ? (
              <BiLoader className="animate-spin text-white" />
            ) : (
              "Change Password"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
