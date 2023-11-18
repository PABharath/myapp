import React,{useState} from 'react'
import './Searchrangedate.css'
const Searchrangedate = () => {
    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { date: '2023-11-10', product: 'Product A', quantity: 100, price: 25.99 },
    { date: '2023-11-10', product: 'Product B', quantity: 50, price: 19.99 },
    { date: '2023-11-11', product: 'Product A', quantity: 75, price: 25.99 },
    { date: '2023-11-11', product: 'Product C', quantity: 30, price: 34.99 },
    { date: '2023-11-12', product: 'Product B', quantity: 120, price: 19.99 },
  ]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
  };

  const filteredData = data.filter(
    (item) =>
      (startDate === '' || item.date >= startDate) &&
      (endDate === '' || item.date <= endDate) &&
      (item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.quantity.toString().includes(searchTerm) ||
        item.price.toFixed(2).includes(searchTerm))
  );




  return (
    <div className='main2'>
        <div className='r1'>
      <h2 >Search Filter Table</h2>
      </div>
      <br/>
<div className='r7'>
<br/>
<label className='r2' htmlFor="startDateFilter">Start Date:</label>
<input
className='r3'
  type="date"
  id="startDateFilter"
  value={startDate}
  onChange={handleStartDateChange}
/>

<label className='r2' htmlFor="endDateFilter">End Date:</label>
<input
className='r3'
  type="date"
  id="endDateFilter"
  value={endDate}
  onChange={handleEndDateChange}
/>

<label className='r2' htmlFor="searchBar">Search:</label>
<input
className='r4'
  type="text"
  id="searchBar"
  value={searchTerm}
  onChange={handleSearchChange}
/>


<button className='r5' onClick={handleReset}>Reset</button>

<table className='r6'>
  <thead>
    <tr>
      <th className='r8'>Date</th>
      <th className='r8'>Product</th>
      <th className='r8'>Quantity</th>
      <th className='r8'>Price</th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((item, index) => (
      <tr key={index}>
        <td className='r9'>{item.date}</td>
        <td className='r9'>{item.product}</td>
        <td className='r9'>{item.quantity}</td>
        <td className='r9'>${item.price.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>
<br/>
</div>
    </div>
  )
}

export default Searchrangedate
