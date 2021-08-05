import {useEffect} from "react"
import { useLocation } from "react-router";

export default function useScrollTop() {
    const currentLocation = useLocation();
    useEffect(() => {
      window.scrollTo(0,0)
    }, [currentLocation]);
  };