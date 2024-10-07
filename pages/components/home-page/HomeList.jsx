import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function HomeList(props) {
  const { locale } = useRouter();
  return (
    <section className="homeCategary pt-5">
      <div className="container">
        <Row>
          {Array.isArray(props.homelists) &&
            props.homelists?.map((list, i) => { 
              return (
                <Col sm={6} md={4} key={i}>
                  <div className="pro-div">
                    <Link href={ "/" + list.urllink} locale={locale}>
                      <figure className="visa-img">
                        <Image
                          alt={list.title} 
                          src={
                            // 2
                              list.title == '科威特旅游电子签证' ? '/country/Kuwait.jpg':
                              list.title == '印度旅游电子签证' ? '/country/India.jpg':
                              list.title == '新西兰旅游ETA' ? '/country/newZealand.jpg':
                              list.title == '美国旅游 ESTA 签证' ? '/country/USA.jpg':
                              list.title == '加拿大旅游ETA' ? '/country/Canada.jpg':
                              list.title == '澳大利亚电子访客签证' ? '/country/Australia.jpg':
                             //3 
                               list.title == '泰国旅游电子签证' ? '/country/Thailand.jpg':
                               //4 JAPAN
                               list.title == 'ベトナム観光電子ビザ' ? '/country/Vietnam.jpg':
                               list.title == 'カンボジア観光電子ビザ' ? '/country/Cambodia.jpg':
                               list.title == 'インドの観光電子ビザ' ? '/country/India.jpg':
                               list.title == 'スリランカの観光電子ビザ' ? '/country/Srilanka.jpg':
                               list.title == 'エジプトの観光電子ビザ' ? '/country/Egypt.jpg':
                               list.title == 'アゼルバイジャンの観光電子ビザ' ? '/country/Azerbaijan.jpg':
                               list.title == 'バーレーンの観光電子ビザ' ? '/country/Bahrein.jpg':
                               list.title == 'ケニアの観光電子ビザ' ? '/country/Kenya.jpg':
                               list.title == 'クウェートの観光電子ビザ' ? '/country/Kuwait.jpg':
                               list.title == 'ニュージーランド観光ETA' ? '/country/newZealand.jpg':
                               list.title == 'サウジアラビアの観光電子ビザ' ? '/country/Saudi Arabia.jpg':
                               list.title == 'インドネシアの観光電子ビザ' ? '/country/Indonesia1.jpg':
                               list.title == 'オマーンの観光電子ビザ' ? '/country/Oman.jpg':
                               
                               list.title == 'ロシアの観光電子ビザ' ? '/country/Russia.jpg':
                               list.title == '米国観光ESTAビザ' ? '/country/USA.jpg':
                               list.title == 'カナダ観光ETA' ? '/country/Canada.jpg':
                               list.title == 'オーストラリア e 観光ビザ' ? '/country/Australia.jpg':
                               list.title == 'تأشيرة فنزويلا السياحية الإلكترونية' ? '/country/venezuela.jpg':

                               //5 hONG KONG
                               //6 SOUTH KOREA
                               //7 PHILIPPNES
                               //8 THAILAND
                               //9 UNITED KINGDOM
                               //10  iNDIA                               
                               list.title == 'वियतनाम पर्यटक ई-वीजा' ? '/country/Vietnam.jpg':
                               list.title == 'कंबोडिया पर्यटक ई-वीजा' ? '/country/Cambodia.jpg':
                               list.title == 'श्रीलंका पर्यटक ई-वीजा' ? '/country/Srilanka.jpg':
                               list.title == 'मिस्र पर्यटक ई-वीजा' ? '/country/Egypt.jpg':
                               list.title == 'अज़रबैजान पर्यटक ई-वीजा' ? '/country/Azerbaijan.jpg':
                               list.title == 'बहरीन पर्यटक ई-वीजा' ? '/country/Bahrein.jpg':
                               list.title == 'केन्या पर्यटक ई-वीजा' ? '/country/Kenya.jpg':
                               list.title == 'मलेशिया पर्यटक ई-वीजा' ? '/country/Malaysia.jpg':
                               list.title == 'रूस पर्यटक ई-वीजा' ? '/country/Russia.jpg':
                               list.title == 'ऑस्ट्रेलिया ई आगंतुक वीजा' ? '/country/Australia.jpg':
                               list.title == 'लाओस पर्यटक ई-वीजा' ? '/country/Laos.jpg':
                               list.title == 'मोरक्को पर्यटक ई-वीजा' ? '/country/Morocco.jpg':
                               list.title == 'दक्षिण अफ्रीका पर्यटक ई-वीजा' ? '/country/South Africa.jpg':
                               list.title == 'अर्मेनिया पर्यटक ई-वीजा' ? '/country/Armenian.jpg':
                               list.title == 'जॉर्जिया पर्यटक ई-वीजा' ? '/country/Georgia.jpg':
                               list.title == 'मोल्दोवा पर्यटक ई-वीजा' ? '/country/Moldova.jpg':
                               list.title == 'ताजिकिस्तान पर्यटक ई-वीजा' ? '/country/tajikistan.jpg':
                               list.title == 'यूक्रेन पर्यटक ई-वीजा' ? '/country/Ukraine 1.jpg':
                               list.title == 'संयुक्त अरब अमीरात पर्यटक ई-वीजा' ? '/country/UAE.jpg':
                               list.title == 'रोमानिया पर्यटक ई-वीजा' ? '/country/Romania.jpg':
                               list.title == 'इंडोनेशिया पर्यटक ई-वीजा' ? '/country/Indonesia1.jpg':
                               list.title == 'वेनेजुएला पर्यटक ई-वीजा' ? '/country/venezuela.jpg':
                               list.title == 'कतर पर्यटक ई-वीजा' ? '/country/Qatar 1.jpg':
                               list.title == 'थाईलैंड पर्यटक ई-वीजा' ? '/country/Thailand.jpg':
                               list.title == 'थाईलैंड पर्यटक ई-वीजा' ? '/public/country/Thailand.jpg':
                               list.title == 'थाईलैंड पर्यटक ई-वीजा' ? '/public/country/Thailand.jpg':
                               list.title == 'थाईलैंड पर्यटक ई-वीजा' ? '/public/country/Thailand.jpg':

                               
                               //11 SRI LANKA
                               //12 SOUTH AFRICA
                               //13 AUSTRALIA
                               //14 KENYA
                               //15 KUWAIT 
                               // 16 MALAYSIA
                               // 17 NEW ZEALAND
                               //18 SAUDI ARABAI
                               //19 TURKEY
                               //20 UKRAINA
                               list.title == 'Індійська туристична електронна віза' ? '/country/India.jpg':
                               list.title == 'Туристична електронна віза Шрі-Ланки' ? '/country/Srilanka.jpg':
                               list.title == 'Єгипетська туристична електронна віза' ? '/country/Egypt.jpg':
                               list.title == 'Туристична електронна віза Бахрейну' ? '/country/Bahrein.jpg':
                               list.title == 'Туристична електронна віза Кенії' ? '/country/Kenya.jpg':
                               list.title == 'Туристична електронна віза Кувейту' ? '/country/Kuwait.jpg':
                               list.title == 'Туристична електронна віза Саудівської Аравії' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Туристична електронна віза в Мексику' ? '/country/Maxico.jpg':
                               list.title == 'Туристична електронна віза Індонезії' ? '/country/Indonesia1.jpg':
                               list.title == 'Туристична електронна віза Оману' ? '/country/Oman.jpg':
                               
                               // 21 UAE
                               //22 CANADA
                               list.title == 'E-visa touristique pour le Vietnam' ? '/country/Vietnam.jpg':
                               list.title == 'Visa de tourisme pour le Cambodge' ? '/country/Cambodia.jpg':
                               list.title == 'Visa de tourisme pour l&#39;Inde' ? '/country/India.jpg':
                               list.title == 'Visa de tourisme pour l&#39;Arménie' ? '/country/Armenian.jpg':
                               list.title == 'Visa touristique électronique pour le Venezuela' ? '/country/venezuela.jpg':


                               list.title == 'Visa de tourisme pour le Sri Lanka' ? '/country/Srilanka.jpg':
                               list.title == 'E-visa de tourisme pour l&#39;Égypte' ? '/country/Egypt.jpg':
                               list.title == 'E-visa de tourisme pour l&#39;Égypte' ? '/public/country/':
                               list.title == 'E-visa de tourisme pour l&#39;Azerbaïdjan' ? '/country/Azerbaijan.jpg':
                               list.title == 'E-visa de tourisme pour Bahreïn' ? '/country/Bahrein.jpg':
                               list.title == 'Visa de tourisme pour le Kenya' ? '/country/Kenya.jpg':
                               list.title == 'E-Visa de tourisme pour le Koweït' ? '/country/Kuwait.jpg':
                               list.title == 'ETA touristique en Nouvelle-Zélande' ? '/country/newZealand.jpg':
                               list.title == 'Visa de tourisme pour la Turquie' ? '/country/Turkey.jpg':
                               list.title == 'VISA ESTA Touristique USA' ? '/country/USA.jpg':
                               list.title == 'Australie e Visa de visiteur' ? '/country/Australia.jpg':

                               //23 HUNGARY

                               list.title == 'Vietnami turisztikai e-vízum' ? '/country/Vietnam.jpg':
                               list.title == 'Kambodzsai turisztikai e-vízum' ? '/country/Cambodia.jpg':
                               list.title == 'India turisztikai e-vízum' ? '/country/India.jpg':
                               list.title == 'Sri Lanka turisztikai e-vízum' ? '/country/Srilanka.jpg':
                               list.title == 'Egyiptom turista E-Visa' ? '/country/Egypt.jpg':
                               list.title == 'Ausztrália e Visitor Visa' ? '/country/Australia.jpg':
                               list.title == 'Azerbajdzsán Tourist E-Visa' ? '/country/Azerbaijan.jpg':
                               list.title == 'Bahrein Tourist E-Visa' ? '/country/Bahrein.jpg':
                               list.title == 'Kuvaiti turisztikai e-vízum' ? '/country/Kuwait.jpg':
                               list.title == 'USA turista ESTA VISA' ? '/country/USA.jpg':
                               list.title == 'Új-zélandi turisztikai ETA' ? '/country/newZealand.jpg':
                               list.title == 'Kanada Touristen ETA' ? '/country/Canada.jpg':
                               list.title == 'ESTA-Visum für Touristen in den USA' ? '/country/USA.jpg':
                               list.title == 'E-Visum für Touristen für Russland' ? '/country/Russia.jpg':
                               list.title == 'E-Visum für Touristen für Saudi-Arabien' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Oman Touristen-E-Visum' ? '/country/Oman.jpg':
                               list.title == 'Elektronisches Touristenvisum für Indonesien' ? '/country/Indonesia1.jpg':

                               list.title == 'Touristen-E-Visum für Kenia' ? '/country/Kenya.jpg':
                               list.title == 'Elektronisches Touristenvisum für Kuwait' ? '/country/Kuwait.jpg':
                               list.title == 'ETA für Touristen in Neuseeland' ? '/country/newZealand.jpg':
                               list.title == 'E-Visum für Touristen für Bahrain' ? '/country/Bahrein.jpg':
                               list.title == 'Touristen-E-Visum für Aserbaidschan' ? '/country/Azerbaijan.jpg':
                               list.title == 'Australien e Besuchervisum' ? '/country/Australia.jpg':
                               list.title == 'Elektronisches Touristenvisum für Indien' ? '/country/India.jpg':
                              
                               list.title == 'Elektronisches Touristenvisum für Sri Lanka' ? '/country/Srilanka.jpg':
                               list.title == 'E-Visum für Touristen für Ägypten' ? '/country/Egypt.jpg':
                               list.title == 'Elektronisches Touristenvisum für Vietnam' ? '/country/Vietnam.jpg':
                               list.title == 'Touristen-E-Visum für Laos' ? '/country/Laos.jpg':
                               list.title == 'Elektronisches Touristenvisum für Kambodscha' ? '/country/Cambodia.jpg':
                               //23 HUNGARY
                               //24 AUSTRIA
                               //25 SERBIA
                               //26 SWITZERLAND
                               //27 GERMANY
                               //28  ISRAEL
                               list.title == 'ויזה אלקטרונית לתיירים אזרבייג&#39;ן' ? '/country/Azerbaijan.jpg':
                               list.title == 'ויזה אלקטרונית לתייר בבחריין' ? '/country/Bahrein.jpg':
                               list.title == 'ויזה אלקטרונית לתיירים לקניה' ? '/country/Kenya.jpg':
                               list.title == 'ניו זילנד תיירות ETA' ? '/country/newZealand.jpg':
                               list.title == 'קנדה תיירות ETA' ? '/country/Canada.jpg':

                               list.title == 'ויזה אלקטרונית לתייר של טג&#39;יקיסטן' ? '/country/tajikistan.jpg':
                               list.title == 'ויזה אלקטרונית לתיירים של ארמניה' ? '/country/Armenian.jpg':
                               list.title == 'ויזה אלקטרונית לתיירים למרוקו' ? '/country/Morocco.jpg':
                             
                               //27  BULGARRIA
                               list.title == 'Виетнамска туристическа електронна виза' ? '/country/Vietnam.jpg':
                               list.title == 'Туристическа електронна виза за Камбоджа' ? '/country/Cambodia.jpg':
                               list.title == 'Индийска туристическа електронна виза' ? '/country/India.jpg':
                               list.title == 'Туристическа електронна виза за Шри Ланка' ? '/country/Srilanka.jpg':
                               list.title == 'Египетска туристическа електронна виза' ? '/country/Egypt.jpg':
                               list.title == 'Австралийска е посетителска виза' ? '/country/Australia.jpg':
                               list.title == 'Азербайджанска туристическа електронна виза' ? '/country/Azerbaijan.jpg':
                               list.title == 'Туристическа електронна виза за Бахрейн' ? '/country/Bahrein.jpg':
                               list.title == 'Туристическа електронна виза за Кения' ? '/country/Kenya.jpg':
                               list.title == 'Кувейтска туристическа електронна виза' ? '/country/Kuwait.jpg':
                               list.title == 'Новозеландски туристически ETA' ? '/country/newZealand.jpg':
                               list.title == 'Електронна туристическа виза за Русия' ? '/country/Russia.jpg':
                               list.title == 'ESTA туристическа виза за САЩ' ? '/country/USA.jpg':
                               list.title == 'Канадски туристически ETA' ? '/country/Canada.jpg':

                               list.title == 'Лаоска туристическа електронна виза' ? '/country/Laos.jpg':
                               list.title == 'Електронна туристическа виза за Саудитска Арабия' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Индонезийска туристическа електронна виза' ? '/country/Indonesia1.jpg':
                               list.title == 'Туристическа електронна виза за Оман' ? '/country/Oman.jpg':
                               
                               //28 FRANCE
                               //29 ITALY

                               list.title == 'Visto turistico elettronico per il Vietnam' ? '/country/Vietnam.jpg':
                               list.title == 'Visto elettronico turistico per la Cambogia' ? '/country/Cambodia.jpg':
                               list.title == 'Visto elettronico turistico per l&#39;India' ? '/country/India.jpg':
                               list.title == 'Visto elettronico per lo Sri Lanka' ? '/country/Srilanka.jpg':
                               list.title == 'Visto turistico elettronico per l&#39;Egitto' ? '/country/Egypt.jpg':
                               list.title == 'Australia e Visto turistico' ? '/country/Australia.jpg':
                               list.title == 'Visto turistico elettronico per l&#39;Azerbaigian' ? '/country/Azerbaijan.jpg':
                               list.title == 'Visto turistico elettronico per il Bahrein' ? '/country/Bahrein.jpg':
                               list.title == 'Visto turistico elettronico per il Kenya' ? '/country/Kenya.jpg':  
                               list.title == 'Visto turistico elettronico per il Kuwait' ? '/country/Kuwait.jpg':
                               list.title == 'ETA turistico neozelandese' ? '/country/newZealand.jpg':
                               list.title == 'Visto turistico elettronico per la Russia' ? '/country/Russia.jpg':
                               list.title == 'Visto turistico ESTA USA' ? '/country/USA.jpg':
                               list.title == 'ETA turistico canadese' ? '/country/Canada.jpg': 

                               list.title == 'Visto turistico elettronico per il Laos' ? '/country/Laos.jpg':
                               list.title == 'Visto turistico elettronico per l&#39;Arabia Saudita' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Visto elettronico per l&#39;Indonesia' ? '/country/Indonesia1.jpg':
                               list.title == 'Visto turistico elettronico per l&#39;Oman' ? '/country/Oman.jpg':
                               //30 DENMARK

                               list.title == 'Vietnam turist e-visum' ? '/country/Vietnam.jpg':
                               list.title == 'Cambodja turist e-visum' ? '/country/Cambodia.jpg':
                               list.title == 'Indien turist e-visum' ? '/country/India.jpg':
                               list.title == 'Sri Lanka turist e-visum' ? '/country/Srilanka.jpg':
                               list.title == 'Egyptens turist e-visum' ? '/country/Egypt.jpg':
                               list.title == 'Australien e Besøgsvisum' ? '/country/Australia.jpg':
                               list.title == 'Aserbajdsjan turist e-visum' ? '/country/Azerbaijan.jpg':
                               list.title == 'Bahrain turist e-visum' ? '/country/Bahrein.jpg':
                               list.title == 'Kenya turist e-visum' ? '/country/Kenya.jpg':
                               list.title == 'Kuwait turist e-visum' ? '/country/Kuwait.jpg':
                               list.title == 'Laos turist e-visum' ? '/country/Laos.jpg':
                               list.title == 'Saudi-Arabien turist e-visum' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Rusland turist e-visum' ? '/country/Russia.jpg':
                               list.title == 'Indonesien turist e-visum' ? '/country/Indonesia1.jpg':
                               list.title == 'Oman turist e-visum' ? '/country/Oman.jpg':
                               list.title == 'USA turist ESTA VISA' ? '/country/USA.jpg':

                               //31 slovakia
                               list.title == 'Vietnamské turistické elektronické vízum' ? '/country/Vietnam.jpg':
                               list.title == 'Laosské turistické elektronické vízum' ? '/country/Laos.jpg':
                               list.title == 'Kambodžské turistické elektronické vízum' ? '/country/Cambodia.jpg':
                               list.title == 'Indické turistické elektronické vízum' ? '/country/India.jpg':
                               list.title == 'Turistické elektronické víza Srí Lanky' ? '/country/Srilanka.jpg':
                               list.title == 'Egyptské turistické elektronické vízum' ? '/country/Egypt.jpg':
                               list.title == 'Austrália a návštevnícke víza' ? '/country/Australia.jpg':
                               list.title == 'Azerbajdžanské turistické elektronické víza' ? '/country/Azerbaijan.jpg':
                               list.title == 'Bahrajnské turistické elektronické vízum' ? '/country/Bahrein.jpg':
                               list.title == 'Keňa turistické elektronické vízum' ? '/country/Kenya.jpg':
                               list.title == 'Kuvajtské turistické elektronické vízum' ? '/country/Kuwait.jpg':
                               list.title == 'Turistický ETA na Novom Zélande' ? '/country/newZealand.jpg':
                               list.title == 'Saudská Arábia turistické E-vízum' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Ruské turistické elektronické vízum' ? '/country/Russia.jpg':
                               list.title == 'Indonézske turistické elektronické vízum' ? '/country/Indonesia1.jpg':
                               list.title == 'Ománske turistické elektronické vízum' ? '/country/Oman.jpg':
                               list.title == 'USA turistické ESTA VISA' ? '/country/USA.jpg':
                               list.title == 'Kanadský turistický ETA' ? '/country/Canada.jpg':
                               list.title == 'Szaúd-Arábia turisztikai e-vízuma' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Indonéziai turisztikai e-vízum' ? '/country/Indonesia1.jpg':
                               list.title == 'Laos Tourist E-Visa' ? '/country/Laos.jpg':
                                //32 Norway 

                               list.title == 'Kambodsja turist e-visum' ? '/country/Cambodia.jpg':
                               list.title == 'India turist e-visum' ? '/country/India.jpg':
                               list.title == 'Egypt turist e-visum' ? '/country/Egypt.jpg':
                               list.title == 'Australia e besøksvisum' ? '/country/Australia.jpg':
                               list.title == 'Saudi-Arabia turist e-visum' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Russland turist e-visum' ? '/country/Russia.jpg':
                               list.title == 'Indonesia turist e-visum' ? '/country/Indonesia1.jpg':
                                // 33 ireland
                                //spain
                               list.title == 'Visa electrónica de turista de Laos' ? '/country/Laos.jpg':
                               list.title == 'Visa electrónica de turista para Kenia' ? '/country/Kenya.jpg':
                               list.title == 'Visa electrónica de turista para Kuwait' ? '/country/Kuwait.jpg':
                               list.title == 'Visa electrónica de turista para Arabia Saudita' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Visa electrónica de turista para Indonesia' ? '/country/Indonesia1.jpg':
                               list.title == 'Visa electrónica de turista para Omán' ? '/country/Oman.jpg':
                               // croatia
                               //36 poland

                               list.title == 'E-Visa turystyczna do Wietnamu' ? '/country/Vietnam.jpg':
                               list.title == 'E-Visa turystyczna do Laosu' ? '/country/Laos.jpg':
                               list.title == 'E-Visa turystyczna do Kambodży' ? '/country/Cambodia.jpg':
                               list.title == 'E-wiza turystyczna do Indii' ? '/country/India.jpg':
                               list.title == 'E-Visa turystyczna do Sri Lanki' ? '/country/Srilanka.jpg':
                               list.title == 'E-Visa turystyczna do Egiptu' ? '/country/Egypt.jpg':
                               list.title == 'Australia i wiza turystyczna' ? '/country/Australia.jpg':
                               list.title == 'Turystyczna e-Visa do Azerbejdżanu' ? '/country/Azerbaijan.jpg':
                               list.title == 'Turystyczna e-Visa do Bahrajnu' ? '/country/Bahrein.jpg':
                               list.title == 'E-Visa turystyczna do Kenii' ? '/country/Kenya.jpg':
                               list.title == 'E-Visa turystyczna do Kuwejtu' ? '/country/Kuwait.jpg':
                               list.title == 'ETA turystyczna w Nowej Zelandii' ? '/country/newZealand.jpg':
                               list.title == 'E-Visa turystyczna do Arabii Saudyjskiej' ? '/country/Saudi Arabia.jpg':
                               list.title == 'E-wiza turystyczna do Rosji' ? '/country/Russia.jpg':
                               list.title == 'E-Visa turystyczna do Indonezji' ? '/country/Indonesia1.jpg':
                               list.title == 'Turystyczna e-Visa do Omanu' ? '/country/Oman.jpg':
                               list.title == 'Wiza turystyczna ESTA do USA' ? '/country/USA.jpg':
                               list.title == 'Kanadyjska turystyczna ETA' ? '/country/Canada.jpg':
                               //36 Lithuania

                               list.title == 'Vietnamo turistinė elektroninė viza' ? '/country/Vietnam.jpg':
                               list.title == 'Laoso turistinė elektroninė viza' ? '/country/Laos.jpg':
                               list.title == 'Kambodžos turistinė elektroninė viza' ? '/country/Cambodia.jpg':
                               list.title == 'Indijos turistinė elektroninė viza' ? '/country/India.jpg':
                               list.title == 'Šri Lankos turistinė elektroninė viza' ? '/country/Srilanka.jpg':
                               list.title == 'Egipto turistinė elektroninė viza' ? '/country/Egypt.jpg':
                               list.title == 'Australijos e lankytojų viza' ? '/country/Australia.jpg':
                               list.title == 'Azerbaidžano turistinė elektroninė viza' ? '/country/Azerbaijan.jpg':
                               list.title == 'Bahreino turistinė elektroninė viza' ? '/country/Bahrein.jpg':
                               list.title == 'Kenijos turistinė elektroninė viza' ? '/country/Kenya.jpg':
                               list.title == 'Kuveito turistinė elektroninė viza' ? '/country/Kuwait.jpg':
                               list.title == 'Naujosios Zelandijos turistinis ETA' ? '/country/newZealand.jpg':
                               list.title == 'Saudo Arabijos turistinė elektroninė viza' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Rusijos turistinė elektroninė viza' ? '/country/Russia.jpg':
                               list.title == 'Indonezijos turistinė elektroninė viza' ? '/country/Indonesia1.jpg':
                               list.title == 'Omano turistinė elektroninė viza' ? '/country/Oman.jpg':
                               list.title == 'JAV turistinė ESTA VISA' ? '/country/USA.jpg':
                               list.title == 'Kanados turistinis ETA' ? '/country/Canada.jpg':
                               //36 Romania

                               list.title == 'Viză electronică turistică pentru Vietnam' ? '/country/Vietnam.jpg':
                               list.title == 'E-Viză turistică pentru Laos' ? '/country/Laos.jpg':
                               list.title == 'E-Viză turistică pentru Cambodgia' ? '/country/Cambodia.jpg':
                               list.title == 'Viză electronică turistică pentru India' ? '/country/India.jpg':
                               list.title == 'E-Visa turistica pentru Sri Lanka' ? '/country/Srilanka.jpg':
                               list.title == 'E-Visa turistica pentru Egipt' ? '/country/Egypt.jpg':
                               list.title == 'Australia e Viza de vizitator' ? '/country/Australia.jpg':
                               list.title == 'E-Visa turistica pentru Azerbaidjan' ? '/country/Azerbaijan.jpg':
                               list.title == 'E-Visa turistica pentru Bahrain' ? '/country/Bahrein.jpg':
                               list.title == 'Viză electronică turistică pentru Kenya' ? '/country/Kenya.jpg':
                               list.title == 'E-Visa turistica pentru Kuweit' ? '/country/Kuwait.jpg':
                               list.title == 'ETA Turistică din Noua Zeelandă' ? '/country/newZealand.jpg':
                               list.title == 'E-Visa turistica pentru Arabia Saudita' ? '/country/Saudi Arabia.jpg':
                               list.title == 'E-Visa turistica pentru Rusia' ? '/country/Russia.jpg':
                               list.title == 'Viză electronică turistică pentru Indonezia' ? '/country/Indonesia1.jpg':
                               list.title == 'E-Viză turistică pentru Oman' ? '/country/Oman.jpg':
                               list.title == 'VISA ESTA Turist SUA' ? '/country/USA.jpg':
                               list.title == 'Canada Turist ETA' ? '/country/Canada.jpg':
                                //37 Latvia

                               list.title == 'Vjetnamas tūristu e-vīza' ? '/country/Vietnam.jpg':
                               list.title == 'Laosas tūristu e-vīza' ? '/country/Laos.jpg':
                               list.title == 'Kambodžas tūristu e-vīza' ? '/country/Cambodia.jpg':
                               list.title == 'Indijas tūristu e-vīza' ? '/country/India.jpg':
                               list.title == 'Šrilankas tūristu e-vīza' ? '/country/Srilanka.jpg':
                               list.title == 'Ēģiptes tūristu e-vīza' ? '/country/Egypt.jpg':
                               list.title == 'Austrālijas e apmeklētāju vīza' ? '/country/Australia.jpg':
                               list.title == 'Azerbaidžānas tūristu e-vīza' ? '/country/Azerbaijan.jpg':
                               list.title == 'Bahreinas tūristu e-vīza' ? '/country/Bahrein.jpg':
                               list.title == 'Kenijas tūristu e-vīza' ? '/country/Kenya.jpg':
                               list.title == 'Kuveitas tūristu e-vīza' ? '/country/Kuwait.jpg':
                               list.title == 'Jaunzēlandes tūristu ETA' ? '/country/newZealand.jpg':
                               list.title == 'Saūda Arābijas tūristu e-vīza' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Krievijas tūristu e-vīza' ? '/country/Russia.jpg':
                               list.title == 'Indonēzijas tūristu e-vīza' ? '/country/Indonesia1.jpg':
                               list.title == 'Omānas tūristu e-vīza' ? '/country/Oman.jpg':
                               list.title == 'ASV tūristu ESTA VISA' ? '/country/USA.jpg':
                               list.title == 'Kanādas tūristu ETA' ? '/country/Canada.jpg':

                               // 38 Netherlands
                               list.title == 'E-Toeristenvisum voor Vietnam' ? '/country/Vietnam.jpg':
                               list.title == 'Laos e-toeristenvisum' ? '/country/Laos.jpg':
                               list.title == 'E-Toeristenvisum voor Cambodja' ? '/country/Cambodia.jpg':
                               list.title == 'E-Toeristenvisum voor India' ? '/country/India.jpg':
                               list.title == 'E-Toeristenvisum voor Sri Lanka' ? '/country/Srilanka.jpg':
                               list.title == 'E-Toeristenvisum voor Egypte' ? '/country/Egypt.jpg':
                               list.title == 'Australië e bezoekersvisum' ? '/country/Australia.jpg':
                               list.title == 'E-Toeristenvisum voor Azerbeidzjan' ? '/country/Azerbaijan.jpg':
                               list.title == 'E-Toeristenvisum voor Bahrein' ? '/country/Bahrein.jpg':
                               list.title == 'E-Toeristenvisum Kenia' ? '/country/Kenya.jpg':
                               list.title == 'E-Toeristenvisum voor Koeweit' ? '/country/Kuwait.jpg':
                               list.title == 'Toeristen ETA Nieuw-Zeeland' ? '/country/newZealand.jpg':
                               list.title == 'E-Toeristenvisum Saoedi-Arabië' ? '/country/Saudi Arabia.jpg':
                               list.title == 'E-Toeristenvisum voor Rusland' ? '/country/Russia.jpg':
                               list.title == 'E-Toeristenvisum voor Indonesië' ? '/country/Indonesia1.jpg':
                               list.title == 'E-Toeristenvisum voor Oman' ? '/country/Oman.jpg':
                               list.title == 'VS Toeristen ESTA VISA' ? '/country/USA.jpg':
                               list.title == 'Toeristen ETA Canada' ? '/country/Canada.jpg':
                               // 39 Rusia
                               //40 Belgium
                               list.title == 'E-visa de tourisme pour le Laos' ? '/country/Laos.jpg':
                               list.title == 'E-Visa de tourisme pour l&#39;Arabie Saoudite' ? '/country/Saudi Arabia.jpg':
                               list.title == 'E-Visa de tourisme pour la Russie' ? '/country/Russia.jpg':
                               list.title == 'Visa touristique électronique pour l&#39;Indonésie' ? '/country/Indonesia1.jpg':
                               list.title == 'E-visa de tourisme pour Oman' ? '/country/Oman.jpg':
                               list.title == 'ETA de tourisme au Canada' ? '/country/Canada.jpg':
                                //41 Czech Republic
                                //42 Greece

                               list.title == 'Τουριστική ηλεκτρονική θεώρηση Βιετνάμ' ? '/country/Vietnam.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση του Λάος' ? '/country/Laos.jpg':
                               list.title == 'Τουριστική Ηλεκτρονική Βίζα Καμπότζης' ? '/country/Cambodia.jpg':
                               list.title == 'Τουριστική Ηλεκτρονική Βίζα Ινδίας' ? '/country/India.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση της Σρι Λάνκα' ? '/country/Srilanka.jpg':
                               list.title == 'Τουριστική Ηλεκτρονική Βίζα Αιγύπτου' ? '/country/Egypt.jpg':
                               list.title == 'Αυστραλία e Visitor Visa' ? '/country/Australia.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση του Αζερμπαϊτζάν' ? '/country/Azerbaijan.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση του Μπαχρέιν' ? '/country/Bahrein.jpg':
                               list.title == 'Τουρίστας ΗΠΑ ESTA' ? '/country/USA.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση του Ομάν' ? '/country/Oman.jpg':
                               list.title == 'Τουριστική Ηλεκτρονική Βίζα Σαουδικής Αραβίας' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Τουριστική ηλεκτρονική θεώρηση της Ρωσίας' ? '/country/Russia.jpg':
                               list.title == 'Τουριστική ηλεκτρονική βίζα Ινδονησίας' ? '/country/Indonesia1.jpg':
                               list.title == 'Τουριστική ΕΤΑ της Νέας Ζηλανδίας' ? '/country/newZealand.jpg':
                               list.title == 'Τουριστική ηλεκτρονική βίζα Κουβέιτ' ? '/country/Kuwait.jpg':
                               list.title == 'Τουριστική Ηλεκτρονική Βίζα Κένυας' ? '/country/Kenya.jpg':
                                //43 Portugal

                               list.title == 'Visto eletrônico laosiano de turista' ? '/country/Laos.jpg':
                               list.title == 'Austrália e visto de visitante' ? '/country/Australia.jpg':
                               list.title == 'E-Visa de turista para o Kuwait' ? '/country/Kuwait.jpg':
                               list.title == 'Arábia Saudita E-Visa de turista' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Rússia E-Visa de turista' ? '/country/Russia.jpg':
                               list.title == 'Visto eletrônico de turista para a Indonésia' ? '/country/Indonesia1.jpg':
                               list.title == 'E-Visa omã de turista' ? '/country/Oman.jpg':
                               list.title == 'VISA ESTA de turista nos EUA' ? '/country/USA.jpg':
                               list.title == 'Canadá Turismo ETA' ? '/country/Canada.jpg':
                               //44 Sweden
                               list.title == 'Kambodja turist E-visum' ? '/country/Cambodia.jpg':
                               list.title == 'Australien e besöksvisum' ? '/country/Australia.jpg':
                               list.title == 'Azerbajdzjan turist e-visum' ? '/country/Azerbaijan.jpg':
                               list.title == 'Kenya turist E-visum' ? '/country/Kenya 1.jpg':
                               list.title == 'Nya Zeelands turist ETA' ? '/country/newZealand.jpg':
                               list.title == 'Saudiarabiens turist E-visum' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Ryssland turist E-visum' ? '/country/Russia.jpg':
                               list.title == 'Indonesiens turist e-visum' ? '/country/Indonesia1.jpg':
                               list.title == 'Kanada Tourist ETA' ? '/country/Canada.jpg':
                                //44 Mexico
                               list.title == 'Visa electrónica de turista para Sudáfrica' ? '/country/South Africa.jpg':
                               list.title == 'Visa electrónica de turista para Armenia' ? '/country/Armenian.jpg':
                               list.title == 'Visa electrónica de turista para Tayikistán' ? '/country/tajikistan.jpg':
                               list.title == 'Visa electrónica de turista para Turquía' ? '/country/Turkey.jpg':
                               list.title == 'Visa electrónica de turista para Ucrania' ? '/country/Ukraine 1.jpg':
                               list.title == 'Visa electrónica de turista para Tailandia' ? '/country/Thailand.jpg':
                               //44 Brazil

                               list.title == 'E-Visa de turista para o Tadjiquistão' ? '/country/tajikistan.jpg':

                               // 45 Finland
                               list.title == 'Laosin turistiviisumi' ? '/country/Laos.jpg':
                               list.title == 'Saudi-Arabian turisti E-Visa' ? '/country/Saudi Arabia.jpg':
                               list.title == 'Indonesian turistiviisumi' ? '/country/Indonesia1.jpg':
                               list.title == 'Oman Tourist E-Visa' ? '/country/Oman.jpg':
                               //46 China 
                               list.title == '老挝旅游电子签证' ? '/country/Laos.jpg':
                               list.title == '南非旅游电子签证' ? '/country/South Africa.jpg':
                               list.title == '格鲁吉亚旅游电子签证' ? '/country/Georgia.jpg':
                               list.title == '摩尔多瓦旅游电子签证' ? '/country/Moldova 1.jpg':
                               list.title == '沙特阿拉伯旅游电子签证' ? '/country/Saudi Arabia.jpg':
                               list.title == '塔吉克斯坦旅游电子签证' ? '/country/tajikistan.jpg':
                               list.title == '乌克兰旅游电子签证' ? '/country/Ukraine 1.jpg':
                               list.title == '印度尼西亚旅游电子签证' ? '/country/Indonesia1.jpg':
                               list.title == '罗马尼亚旅游电子签证' ? '/country/Romania.jpg':
                               list.title == '智利旅游电子签证' ? '/country/Chile.jpg':
                               list.title == '委内瑞拉旅游电子签证' ? '/country/venezuela.jpg':
                               list.title == '阿曼旅游电子签证' ? '/country/Oman.jpg':
                               list.title == '卡塔尔旅游电子签证' ? '/country/Qatar 1.jpg':
                               
                                //46 Indonesia
                                //chile
                               list.title == 'Visa electrónica de turista de Venezuela' ? '/country/venezuela.jpg':
                              
                            // default
                              list.title == 'Vietnam Tourist E-Visa' ? '/country/Vietnam.jpg':
                              list.title == 'Cambodia Tourist E-Visa' ? '/country/Cambodia.jpg':
                              list.title ==  "Sri Lanka Tourist E-Visa"  ? '/country/Srilanka.jpg':
                              list.title ==  "E-Visa Pelancong Sri Lanka" ? '/country/Srilanka.jpg':
                              list.title == 'E-Visa Pelancong Ukraine' ? '/country/Ukraine 1.jpg':
                              list.title == 'E-Visa Pelancong Oman' ? '/country/Oman.jpg':
                              list.title == 'United Kingdom EVW' ? '/country/UnitedKingdom.jpg':
                              list.title == 'Egypt Tourist E-Visa' ? '/country/Egypt.jpg':
                              list.title == 'E-Visa Pelancong Armenia' ? '/country/Armenian.jpg':
                              list.title == 'E-Visa Pelancong Georgia' ? '/country/Georgia.jpg':
                              list.title == 'E-Visa Pelancong Moldova' ? '/country/Moldova 1.jpg':
                              list.title == 'E-Visa Pelancong Arab Saudi' ? '/country/Saudi Arabia.jpg':
                              list.title == 'Azerbaijan Tourist E-Visa' ? '/country/Azerbaijan.jpg':
                              list.title == 'E-Visa Pelancong Azerbaijan' ? '/country/Azerbaijan.jpg':
                              list.title == 'Kenya Tourist E-Visa' ? '/country/Kenya.jpg':
                              list.title == 'Malaysia Tourist E-Visa' ? '/country/Malaysia.jpg':
                              list.title == 'UAE Tourist E-Visa' ? '/country/UAE.jpg':
                              list.title == 'Russia Tourist E-Visa' ? '/country/Russia.jpg':
                              list.title == 'Thailand Tourist E-Visa' ? '/country/Thailand.jpg':
                              list.title == 'Australia e Visitor Visa' ? '/country/Australia.jpg':
                              list.title == 'Australia dan Visa Pelawat' ? '/country/Australia.jpg':
                              list.title == 'India Tourist E-Visa' ? '/country/India.jpg':
                              list.title == 'E-Visa Pelancong India' ? '/country/India.jpg':
                              list.title == 'New Zealand Tourist ETA' ? '/country/newZealand.jpg':
                              list.title == 'Argentina Tourist E-Visa' ? '/country/Argentina.jpg':
                              list.title == 'USA Tourist ESTA' ? '/country/USA.jpg':
                              list.title == 'Canada Tourist ETA' ? '/country/Canada.jpg':
                              list.title == 'Turkey Tourist E-Visa' ? '/country/Turkey.jpg':
                              list.title == 'E-Visa Pelancong Bahrain' ? '/country/Bahrein.jpg':
                              list.title == 'E-Visa Pelancong Kuwait' ? '/country/Kuwait.jpg':
                              list.title == 'ETA Pelancong New Zealand' ? '/country/newZealand.jpg':
                              list.title == 'E-Visa Pelancong Rusia' ? '/country/Russia.jpg':
                              list.title == 'التأشيرة الإلكترونية السياحية لمصر' ? '/country/Egypt.jpg':
                              list.title == 'تأشيرة مولدوفا السياحية الإلكترونية' ? '/country/Moldova 1.jpg':
                              list.title == 'تأشيرة سريلانكا السياحية الإلكترونية' ? '/country/srilanka 1.jpg':
                              list.title == 'تأشيرة إندونيسيا السياحية الإلكترونية' ? '/country/Indonesia1.jpg':
                              list.title == 'تأشيرة تشيلي السياحية الإلكترونية' ? '/country/Chile.jpg':
                              list.title == 'تأشيرة رومانيا السياحية الإلكترونية' ? '/country/Romania.jpg':
                              list.title == 'تأشيرة أرمينيا السياحية الإلكترونية' ? '/country/Turkey.jpg':
                              list.title == 'تأشيرة أذربيجان السياحية الإلكترونية' ? '/country/Russia.jpg':
                              list.title == 'تأشيرة جنوب إفريقيا السياحية الإلكترونية' ? '/country/newZealand.jpg':
                              list.title == 'تأشيرة لاوس السياحية الإلكترونية' ? '/country/Laos.jpg':
                              list.title == 'تأشيرة فيتنام السياحية الإلكترونية' ? '/country/Vietnam.jpg':
                              list.title == 'تأشيرة الهند السياحية الإلكترونية' ? '/country/India.jpg':
                              list.title == 'كندا السياحية ايتا' ? '/country/Canada.jpg':
                              list.title == 'تأشيرة كمبوديا السياحية الإلكترونية' ? '/country/Cambodia.jpg':
                              list.title == 'تأشيرة تايوان السياحية الإلكترونية' ? '/country/Taiwan.jpg':
                              list.title == 'تأشيرة كينيا السياحية الإلكترونية' ? '/country/Kenya.jpg':
                              list.title == 'المملكة المتحدة EVW' ? '/country/UnitedKingdom.jpg':
                              list.title == 'نيوزيلندا السياحية ETA' ? '/country/newZealand.jpg':
                              list.title == 'تأشيرة تركيا السياحية الإلكترونية' ? '/country/Turkey.jpg':
                              list.title == 'التأشيرة الإلكترونية السياحية لروسيا' ? '/country/Russia.jpg':
                              list.title == 'تأشيرة الأرجنتين السياحية الإلكترونية' ? '/country/Argentina.jpg':
                              list.title == 'تأشيرة كولومبيا السياحية الإلكترونية' ? '/country/Cambodia.jpg':
                              list.title == '베트남 관광 e비자' ? '/country/Vietnam.jpg':
                              list.title == '캄보디아 관광 E비자' ? '/country/Cambodia.jpg':
                              list.title == '이집트 관광 E비자' ? '/country/Egypt.jpg':
                              list.title == '아제르바이잔 관광 E비자' ? '/country/Azerbaijan.jpg':
                              list.title == '바레인 관광 E비자' ? '/country/Bahrein.jpg':
                              list.title == '케냐 관광 E비자' ? '/country/Kenya.jpg':
                              list.title == '쿠웨이트 관광 E비자' ? '/country/Kuwait.jpg':
                              list.title == '뉴질랜드 관광 ETA' ? '/country/newZealand.jpg':
                              list.title == '미국 관광 ESTA 비자' ? '/country/USA.jpg':
                              list.title == '오만 관광 E비자' ? '/country/Oman.jpg':
                              list.title == '인도네시아 관광 E비자' ? '/country/Indonesia1.jpg':
                              list.title == '사우디아라비아 관광 E비자' ? '/country/Saudi Arabia.jpg':
                              list.title == '캐나다 관광 ETA' ? '/country/Canada.jpg':
                              list.title == '호주 전자 방문 비자' ? '/country/Australia.jpg':
                              list.title == 'วีซ่าท่องเที่ยวอินเดีย E-Visa' ? '/country/India.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวศรีลังกา E-Visa" ? '/country/Srilanka.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวโมร็อกโก E-Visa" ? '/country/Morocco.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวอาร์เมเนีย E-Visa" ? '/country/Armenian.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวโมร็อกโก E-Visa" ? '/country/Morocco.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวยูเครน E-Visa" ? '/country/Ukraine 1.jpg':
                              list.title ==  "E-Visa ท่องเที่ยวมอลโดวา" ? '/country/Moldova.jpg':
                              list.title ==  "E-Visa ท่องเที่ยวโรมาเนีย" ? '/country/Romania.jpg':
                              list.title ==  "วีซ่าท่องเที่ยวโอมาน E-Visa" ? '/country/Oman.jpg':

                              list.title == 'วีซ่าท่องเที่ยวอาเซอร์ไบจาน E-Visa' ? '/country/Azerbaijan.jpg':
                              list.title == 'วีซ่าท่องเที่ยวบาห์เรน E-Visa' ? '/country/Bahrein.jpg':
                              list.title == 'วีซ่าท่องเที่ยวเคนยา E-Visa' ? '/country/Kenya.jpg':
                              list.title == 'E-Visa ท่องเที่ยวสหรัฐอาหรับเอมิเรตส์' ? '/country/UAE.jpg':
                              list.title ==  "Kamboçya Turist E-Vizesi" ? '/country/Cambodia.jpg':
                              list.title ==  "Laos Turist E-Vizesi" ? '/country/Laos.jpg':
                              list.title ==  "Tayvan Turist E-Vizesi" ? '/country/Taiwan.jpg':
                              list.title ==  "Ermenistan Turist E-Vizesi" ? '/country/Armenian.jpg':
                              list.title ==  "Romanya Turist E-Vizesi" ? '/country/Romania.jpg':
                              list.title ==  "Meksika Turist E-Vizesi" ? '/country/Maxico.jpg':
                              list.title ==  "Endonezya Turist E-Vizesi" ? '/country/Indonesia1.jpg':
                              list.title ==  "Umman Turist E-Vizesi" ? '/country/Oman.jpg':


                              list.title ==  "Sri Lanka Turist E-Vizesi" ? '/country/Srilanka.jpg':
                              list.title == 'Kenya Turist E-Vizesi' ? '/country/Kenya.jpg':
                              list.title ==  "Kuveyt Turist E-Vizesi" ? '/country/Kuwait.jpg':
                              list.title == 'BAE Turist E-Vizesi' ? '/country/UAE.jpg':
                              list.title ==  "Rusya Turist E-Vizesi" ? '/country/Russia.jpg':
                              list.title == 'Visa electrónica de turista para Vietnam' ? '/country/Vietnam.jpg': 
                              list.title == 'Visa electrónica de turista para Azerbaiyán' ? '/country/Azerbaijan.jpg':
                              list.title == 'Visa electrónica de turista para Baréin' ? '/country/Bahrein.jpg':
                              list.title == 'ETA turística de Nueva Zelanda' ? '/country/newZealand.jpg':
                              list.title ==  "VISA ESTA de turista de EE. UU." ? '/country/USA.jpg':
                              list.title ==  "ETA turística de Canadá" ? '/country/Canada.jpg':

                              list.title ==  "越南旅游电子签证" ? '/country/Vietnam.jpg':
                              list.title == '柬埔寨旅游电子签证' ? '/country/Cambodia.jpg':
                              list.title ==  "斯里兰卡旅游电子签证" ? '/country/Srilanka.jpg':
                              list.title == '埃及旅游电子签证' ? '/country/Egypt.jpg':
                              list.title == '阿塞拜疆旅游电子签证' ? '/country/Azerbaijan.jpg':
                              list.title == '巴林旅游电子签证' ? '/country/Bahrein.jpg':
                              list.title == '肯尼亚旅游电子签证' ? '/country/Kenya.jpg':
                              list.title == '马来西亚旅游电子签证' ? '/country/Malaysia.jpg':
                              list.title == '土耳其旅游电子签证' ? '/country/Turkey.jpg':
                              list.title == '哥伦比亚旅游电子签证' ? '/country/Cambodia.jpg':
                              list.title == '俄罗斯旅游电子签证' ? '/country/Russia.jpg':
                              list.title ==  "USA Tourist ESTA VISA" ? '/country/USA.jpg':
                              list.title ==  "Kanadan turisti-ETA" ? '/country/Canada.jpg':
                              list.title == 'Venäjän turisti E-Visa' ? '/country/Russia.jpg':
                              list.title == 'Kambodžan turisti E-Visa' ? '/country/Cambodia.jpg':
                              list.title == 'Intian turisti E-Visa' ? '/country/India.jpg':
                              list.title ==  "Sri Lankan turisti-e-viisumi" ? '/country/Srilanka.jpg':
                              list.title == 'Egyptin turisti E-Visa' ? '/country/Egypt.jpg':
                              list.title == 'Egyptin turisti E-Visa' ? '/country/Egypt.jpg':
                              list.title == 'Azerbaidžanin turisti E-Visa' ? '/country/Azerbaijan.jpg':
                              list.title == 'Bahrain Tourist E-Visa' ? '/country/Bahrein.jpg':
                              list.title == 'Kenia Tourist E-Visa' ? '/country/Kenya.jpg':
                              list.title == 'Kuwait Tourist E-Visa' ? '/country/Kuwait.jpg':
                              list.title == 'Uuden-Seelannin turisti-ETA' ? '/country/newZealand.jpg':
                              list.title == 'E-Visa de turista vietnamita' ? '/country/Vietnam.jpg':
                              list.title == 'Visto eletrônico cambojano de turista' ? '/country/Cambodia.jpg':
                              list.title == 'Visto eletrônico indiano de turista' ? '/country/India.jpg':
                              list.title ==  "E-Visa Sri Lanka de turista" ? '/country/Srilanka.jpg':
                              list.title ==  "E-Visa Sri Lanka de turista" ? '/country/Srilanka.jpg':
                              list.title == 'E-Visa egípcio de turista' ? '/country/Egypt.jpg':
                              list.title == 'E-Visa de turista para o Azerbaijão' ? '/country/Azerbaijan.jpg':
                              list.title == 'E-Visa de turista para o Bahrein' ? '/country/Bahrein.jpg':
                              list.title == 'E-Visa queniano de turista' ? '/country/Kenya.jpg':
                              list.title == 'E-Visa queniano de turista' ? '/country/Kenya.jpg':
                              list.title == 'Turismo da Nova Zelândia ETA' ? '/country/newZealand.jpg':
                              list.title == 'Visa electrónica de turista para Camboya' ? '/country/Cambodia.jpg':
                              list.title == 'Visa electrónica de turista para India' ? '/country/India.jpg':
                              list.title ==  "Visa electrónica de turista de Sri Lanka" ? '/country/Srilanka.jpg':
                              list.title == 'Visa electrónica de turista para Egipto' ? '/country/Egypt.jpg':
                              list.title == 'Visa de Visitante para Australia' ? '/country/Australia.jpg':
                              list.title == 'Visa electrónica de turista para Rusia' ? '/country/Russia.jpg':
                              
                              '/country/countryDefaulr.jpg'
                          }
                          // src={`https://ik.imagekit.io/vs4gypuhi/${list.imageurl}`}
                          height={270}
                          width={397}
                        />
                      </figure>
                      <div className="pro-details">
                        <h2 className="pro-title">
                          {list.title}
                        </h2>
                        <p className="skill">
                          <i className="fa fa-clock-o" /> {list.duration}{" "}
                          Validity
                        </p>
                        <p className="skill">
                          <i className="fa fa-usd" /> Starting as low as{" "}
                          {list.currency_icon} {list.price} per Visa{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </section>
  );
}
