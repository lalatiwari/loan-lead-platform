import  api  from "./api";

export const sendOTP = async (
  mobile: string
) => {

  const response =
  await api.post(
    "/customer/send-otp",
    {
      mobile,
    }
  );

  return response.data;
};

export const verifyOTP =
async (
  mobile: string,
  otp: string
) => {

  const response =
  await api.post(
    "/customer/verify-otp",
    {
      mobile,
      otp,
    }
  );

  return response.data;
};