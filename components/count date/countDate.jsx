import  { useState, useEffect } from 'react';

const CountDate = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Mengatur waktu akhir perhitungan mundur
    const countDownDate = new Date("Dec 5, 2023 15:37:25").getTime();

    // Memperbarui hitungan mundur setiap 1 detik
    const interval = setInterval(() => {
      // Untuk mendapatkan tanggal dan waktu hari ini
      const now = new Date().getTime();
      
      // Temukan jarak antara sekarang dan tanggal hitung mundur
      const distance = countDownDate - now;
      
      // Perhitungan waktu untuk hari, jam, menit dan detik
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Format hitungan mundur ke dalam string yang sesuai
      const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      
      // Perbarui state dengan hitungan mundur yang terformat
      setTimeRemaining(formattedTime);
      
      // Jika hitungan mundur selesai, hentikan interval
      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining('EXPIRED');
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerCountDate">
      <h1>{timeRemaining}</h1>
    </div>
  );
}

export default CountDate;
