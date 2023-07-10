import { Fragment, useState } from "react";
import { Container, Input, Label, FormGroup, Button, Col, Row, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { API } from "../../../common/API";
import { GoPeople } from "react-icons/go"

export default function SearchSection(){
  const [nameCar, setNameCar]= useState('')
  const [category, setCategory] = useState('')
  const [isRented, setIsRented] = useState(false)
  const [price, setPrice] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmited] = useState(false)
  const [dataDetail, setDataDetail] = useState (null)
  const fetchData = () => {
    const params = `name=${nameCar}&category=${category}&isRented=${isRented}&${mappingPrice(price)}`
    API.get(`admin/v2/car?${params}&page=1&pageSize=10`).then(res=>{
      setData(res.data.cars)
    }).catch(err =>{
      console.log('err:', err)
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  const FetchDataDetail = (id) => {
    setIsLoading(true)
    API.get(`admin/car/${id}`).then((res) => {
        console.log ('data car :', res.data)
        setDataDetail(res.data)
    }) .catch ((err) => {
        console.error (err)
    }).finally (() => {
        setIsLoading(false)
    })
  }
  console.log(data)

  const mappingPrice = (price) => {
    switch(price){
      case 'low':
        return '2-4 orang'
      case 'medium':
        return '4-6 orang'
      case 'high':
        return '6-8 orang'
      default:
        return ''
    }
  }


  const mappingSeat = (category) => {
    switch(category) {
      
      case '2-4 orang' :
          return '2 - 4 orang'
      case '4-6 orang' :
        return '4 - 6 orang'
      case '6-8 orang' :
        return '6 - 8 orang'
      case 'small' :
        return '2 - 4 orang'
      case 'medium' :
        return '4 - 6 orang'
      case 'large' :
        return '6 - 8 orang'
      case  'big' :
        return '6 - 8 orang'
      default:
        return ''
    }
  }


  const formatToIDR = (idr) => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return `${'Rp '}${parsed}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true)
    setIsLoading(true)
    fetchData();
  }

  return (
    <Container fluid className="search-card-section">
      <section className="search-card">
        <Row className="search-card-form">
          <Col md={10} className="card-detail-option">
            <Row className="form-parent">
              <Col md={3}>
                <FormGroup>
                  <Label 
                    for="nama" 
                    className="input-form"
                  >
                    Nama Mobil
                  </Label>
                    <Input 
                      disabled={isSubmitted}
                      id="nama"
                      className="input-form"
                      type="text"
                      placeholder="Ketik nama/tipe mobil"
                      onChange={(e) => setNameCar(e.target.value)}
                    />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label 
                    for="kapasitas" 
                    className="input-form"
                  >
                    Kategori
                  </Label>
                  <Input
                    disabled={isSubmitted}
                    id="kapasitas"
                    name="select"
                    type="select"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option hidden >Masukkan Kapasitas Mobil</option>
                    <option className="opt" value="Small">
                      2-4 orang
                    </option>
                    <option className="opt" value="Medium">
                      4-6 orang
                    </option>
                    <option className="opt" value="Large"> 
                      6-8 orang
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label 
                    for="harga" 
                    className="input-form"
                  >
                    Harga
                  </Label>
                  <Input
                    disabled={isSubmitted}
                    id="harga"
                    name="select"
                    type="select"
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option hidden >Masukkan harga sewa per hari</option>
                    <option className="opt" value="low">
                      {`< Rp 400.000`}
                    </option>
                    <option className="opt" value="medium">
                      Rp.400.000 - Rp.600.000
                    </option>
                    <option className="opt" value="high">
                      {`> Rp 600.000`}
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} className="card-spacing">
                <FormGroup>
                  <Label 
                    for="status" 
                    className="input-form"
                  >
                    Status
                  </Label>
                  <Input
                    disabled={isSubmitted}
                    id="status"
                    name="select"
                    type="select"
                    onChange={(e) => setIsRented(e.target.value)}
                  >
                    <option className="opt" value={true}>
                      Disewa
                    </option>
                    <option className="opt" value={false}>
                      Free
                    </option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="button-style">
            {isSubmitted ? (
              <Button
                type="button"
                color="danger"
                className="button-submit-search"
                outline
                onClick={()=>{
                  setIsSubmited(false)
                  setData([])
                  setDataDetail(null)
                }} 
                >
                Reset
              </Button>
            ) : (
              <Button
                type="button"
                color="success"
                className="button-submit-search"
                onClick={handleSubmit}
              >
                Cari Mobil
              </Button>
            )}
          </Col>
        </Row>
      </section>
      
      {!dataDetail &&
      <section className="display-car-section">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Row>
            {data.map(car => {
              return (
                <Fragment key={car.id}>
                  <Col md={4}>
                    <Card
                      style={{
                        marginTop:'30px',
                      }}
                    >
                      <img
                        alt={car.name}
                        src={car.image}
                        className="car-size"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          {car.name}
                        </CardTitle>
                        <CardText>
                          {formatToIDR(car.price)} / hari
                        </CardText>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </CardText>
                        <Button 
                          color="success" 
                          style={{width:"100%"}}
                          onClick ={() => FetchDataDetail(car.id)}
                        
                        >
                          Pilih Mobil
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Fragment>
              )
            })}
          </Row>
        )}
      </section>
      }

      {dataDetail &&
        <section>
          <Row>
            <Col md={8} className="border-cart" >
                <h2 className="cart-title">Tentang Paket</h2>
                <h5 className="cart-header">Include</h5>
                <ul className="head-list">
                    <li className="list-cart">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li className="list-cart">Sudah termasuk bensin selama 12 jam</li>
                    <li className="list-cart">Sudah termasuk Tiket Wisata</li>
                    <li className="list-cart">Sudah termasuk pajak</li>
                </ul>
                <h5 className="cart-header">Exclude</h5>
                <ul className="head-list">
                    <li className="list-cart">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li className="list-cart">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li className="list-cart">Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h5 className="cart-header">Refund, Reschedule, Overtime</h5>
                <ul className="head-list">
                    <li className="list-cart">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li className="list-cart">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li className="list-cart">Tidak termasuk akomodasi penginapan</li>
                    <li className="list-cart">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li className="list-cart">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li className="list-cart">Tidak termasuk akomodasi penginapan</li>
                    <li className="list-cart">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li className="list-cart">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li className="list-cart">Tidak termasuk akomodasi penginapan</li>
                </ul>
            </Col> 

            <Col md={4}>
                    <img className="cart-img"
                      alt={dataDetail.name}
                      src={dataDetail.image}
                    />
                    <p className="cart-name"><strong>{dataDetail.name}</strong></p>
                    <div className="category-map">
                     <p className="icon-car"><GoPeople /></p>
                     <p className="seat-car">{mappingSeat(dataDetail.category)}</p> 
                    </div>
                    <div className="cart-price">
                    <p><strong>Total</strong></p>
                    <p><strong>{formatToIDR(dataDetail.price)}</strong></p>
                    </div>
            </Col>
        </Row>
        </section>
      }
    </Container>

    
  )
}
