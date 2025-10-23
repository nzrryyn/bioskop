"use client"
import React, { useState } from "react"
import "./n/c.css"

export default function Page() {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [jumlah, setJumlah] = useState(0)
  const [total, setTotal] = useState(0)
  const [errors, setErrors] = useState({ nama: "", email: "", jumlah: "" })

  const hargaTiket = 45000

  const hitungTotal = (qty: number) => {
    setTotal(qty * hargaTiket)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = { nama: "", email: "", jumlah: "" }
    let valid = true

    if (!nama.trim()) {
      newErrors.nama = "Could not be empty."
      valid = false
    }
    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Email not valid."
      valid = false
    }
    if (jumlah < 1 || jumlah > 10) {
      newErrors.jumlah = "Jumlah antara 1–10."
      valid = false
    }

    setErrors(newErrors)

    if (valid) {
      alert("Pemesanan berhasil! Terima kasih telah memesan tiket.")
      setNama("")
      setEmail("")
      setJumlah(0)
      setTotal(0)
    }
  }

  return (
    <div>
      <div className="kotak">
        <div className="gm">
          <img src="la.jpg" alt="" />
        </div>

        <form id="order" style={{ marginTop: 90 }} onSubmit={handleSubmit}>
          <h1>La La Land</h1>
          <p style={{ marginBottom: 50 }}>
            When Sebastian, a pianist, and Mia, an actress, follow their passion
            and achieve success in their respective fields, they find themselves
            torn between their love for each other and their careers.
          </p>

          <label htmlFor="nama">Name </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Enter your name"
          />
          <div className="error">{errors.nama}</div>

          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <div className="error">{errors.email}</div>

          <div className="jumlah">
            <label htmlFor="jumlah">Ticket Amount:</label>
            <input
              type="number"
              id="jumlah"
              min="1"
              max="10"
              value={jumlah}
              onChange={(e) => {
                const qty = parseInt(e.target.value) || 0
                setJumlah(qty)
                hitungTotal(qty)
              }}
            />
            <div className="error">{errors.jumlah}</div>
          </div>

          <p id="totalHarga">Total: Rp{total.toLocaleString("id-ID")}</p>
          <button style={{ marginLeft: 20 }} type="submit">
            Order
          </button>
        </form>
      </div>
      <div className="bg">
        <img src="lab.png" alt="" />
      </div>
    </div>
  )
}
