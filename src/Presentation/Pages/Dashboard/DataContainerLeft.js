import '../../Assets/Styles/DataContainer.css'
import '../../Assets/Styles/DataContainerLeft.css'
import AnalogValue from '../../Components/AnalogValue/AnalogValue'
import DataAnalogValue from '../../Data/analog.json'
import BarChart from '../../Components/BarChart/BarChart'
import InjectorsData from '../../Data/injectors.json';
import LineChart from '../../Components/LineChart/LineChart'
import DataPressure from '../../Data/pressure.json'

function DataContainerLeft(){   
    const dataInj = InjectorsData;
    const dataPressure = DataPressure;
    const HpSpeedSL = DataAnalogValue[0];
    const HpPressureSL = DataAnalogValue[1];

    return(
        <div id='DataContainerLeft' className='DataContainer'>
            <h2> Dosing SL </h2>
            <div className="Widget-row">
                <AnalogValue 
                    value={HpSpeedSL.value}
                    unit={HpSpeedSL.unit}
                    title={HpSpeedSL.title}
                    warn={HpSpeedSL.warn}
                    alm={HpSpeedSL.alm}
                />
            </div>
            <div className="Widget-row">
                <AnalogValue 
                    value={HpPressureSL.value}
                    unit={HpPressureSL.unit}
                    title={HpPressureSL.title}
                    warn={HpPressureSL.warn}
                    alm={HpPressureSL.alm}
                />
            </div>
            <div className="Widget-row">
                <BarChart 
                    data={dataInj}
                />
            </div>
            <div className="Widget-row">
                <LineChart 
                    data={dataPressure}
                />
            </div>
        </div>
    )
}

export default DataContainerLeft;