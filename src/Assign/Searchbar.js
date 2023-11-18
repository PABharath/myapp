import React,{useState} from 'react'
import './Searchbar.css'

const Searchbar = () => {
    const [filterDate, setFilterDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
      { date: '2023-11-10', Store: 'Jeans', quantity: 10, price: 25.99 },
      { date: '2023-11-10', Store: 'Shirts', quantity: 50, price: 19.99 },
      { date: '2023-11-11', Store: 'Trouseres', quantity: 15, price: 25.99 },
      { date: '2023-11-11', Store: 'Shorts', quantity: 30, price: 34.99 },
      { date: '2023-11-12', Store: 'Hoddie', quantity: 20, price: 19.99 },
    ]);
  
    const handleDateChange = (event) => {
      setFilterDate(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleReset = () => {
      setFilterDate('');
      setSearchTerm('');
    };
  
    const filteredData = data.filter(
      (item) =>
        item.date.includes(filterDate) &&
        (item.Store.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.quantity.toString().includes(searchTerm) ||
          item.price.toFixed(2).includes(searchTerm))
    );

  return (
    <div className='main1'>
        <div className='header'>
          <h2>Search Data in Given table</h2>
          </div>
          <h1 className='header1'>Clothing Store</h1>
        <div className='Container1'>
    

<label htmlFor="dateFilter">Filter by Date:</label>
<input
  type="date"
  id="dateFilter"
  value={filterDate}
  onChange={handleDateChange}
/>
<br/>

<label htmlFor="searchBar">Search:</label>
<input
  type="text"
  id="searchBar"
  value={searchTerm}
  onChange={handleSearchChange}
/>
<br/>

<button onClick={handleReset}>Reset</button>

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Store</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((item, index) => (
      <tr key={index}>
        <td>{item.date}</td>
        <td>{item.Store}</td>
        <td>{item.quantity}</td>
        <td>${item.price.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  )
}

export default Searchbar
