import React, { useState, useEffect } from "react";
import Jumb from "../../components/Jumb";
import Layout from "../../components/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostGenerator from "../../components/PostsGenerator";
import MyCalendar from "../../components/MyCalendar";
import "./style.css";
const axios = require("axios");

const url = "https://647dneh5t2.execute-api.us-east-1.amazonaws.com/getData";

function Home() {
  const [data, setData] = useState({});
  const [selectedDay, setSelectedDay] = useState(() => {
    return getData(new Date());
  });

  const [postListTwitter, setPostListTwitter] = useState([]);
  const [postListAC, setPostListAC] = useState([]);

  useEffect(() => {
    (async function api() {
      let config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      await axios
        .post(
          url,
          {
            param: "03/2020"
          },
          config
        )
        .then(async function(value) {
          setData(value.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    refreshPostList(selectedDay);
    // eslint-disable-next-line
  }, [data, selectedDay]);

  function changeDay(value) {
    setSelectedDay(getData(value));
    console.log(postListTwitter.length);
  }

  function refreshPostList(day) {
    var auxa = [];
    var auxb = [];

    if (data.twitter) {
      data.twitter.forEach(function(value, index) {
        if (value.pubDate === day) {
          auxa.push(value);
        }
        if (data.twitter.length === index + 1) {
          setPostListTwitter(auxa);
        }
      });
    }
    if (data.acordacidade) {
      data.acordacidade.forEach(function(value, index) {
        if (value.pubDate === day) {
          auxb.push(value);
        }
        if (data.acordacidade.length === index + 1) {
          setPostListAC(auxb);
        }
      });
    }
  }

  function getData(value) {
    var dia = value.getDate();
    if (dia < 10) {
      dia = "0" + dia;
    }
    var mes = value.getMonth() + 1;
    if (mes < 10) {
      mes = "0" + mes;
    }
    var ano = value.getFullYear();
    return dia + "-" + mes + "-" + ano;
  }

  return (
    <div>
      <allow-navigation href={url} />
      <Jumb />
      <div class="d-flex justify-content-center">
        <p className="inst">
          Selecione o dia para ver as menções sobre as atividades da UEFS no
          twitter e no jornal Acorda Cidade{" "}
        </p>
      </div>

      <Layout>
        <Row className="my-5">
          <Col xs={12} md={8}>
            <PostGenerator
              selectedDay={selectedDay}
              postListTwitter={postListTwitter}
              postListAC={postListAC}
            />
          </Col>
          <Col xs={12} md={4} className="order-md-1 order-first distribution">
            <MyCalendar changeDay={changeDay} data={data} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Home;
