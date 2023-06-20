"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
 const getData = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    cache: "no-cache"
  });

  if (!res.ok) {
    setErr(true)
  }
  const data = await res.json();

  setData(data)
  setIsLoading(false);
 }
 getData();
  }, []);

  console.log(data)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard