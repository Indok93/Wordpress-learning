import { useEffect, useState } from "react";
import { Header } from "../Partials/Header/Header"

export const Home = () => {
  const [state, setState] = useState({
    loading: false,
    posts: [],
    error: ''
  })

  useEffect(() => {
    const wordPressSiteUrl = '';
    setState({loading: true});

  }, []); // Empty array means this effect only runs once after the initial render


  return (
    <div>
        <Header />
    </div>
  )
}
