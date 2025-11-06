import React, { useEffect } from "react";
import { JOB_API_VARIABLE } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import store from "@/redux/store";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_VARIABLE}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
        console.log(res.data);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
