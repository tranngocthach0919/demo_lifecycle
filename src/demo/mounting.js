import React, { useState, useEffect } from 'react';

function Mounting() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Component mounted!'); // In ra console khi component được mount 

    // Mô phỏng việc fetch dữ liệu từ API
    setTimeout(() => {
      setData({ message: 'Hello from API!' }); 
    }, 1000); // Giả lập độ trễ 1 giây
  }, []); // Mảng dependency rỗng đảm bảo effect chỉ chạy một lần khi mount

  return (
    <div>
      {data ? (
        <p>{data.message}</p> 
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default Mounting;