//import { render } from '@testing-library/react'
import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CounteyPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
    state = {
        data: {},
        country:'',
    }
    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
      }
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    render() {

        const { data , country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19" />
                <Cards data={data} />
                <CounteyPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}  />

            </div>
        )
    }
}

export default App
