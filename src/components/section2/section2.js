import React from "react";
import Card from "./card";

// Can also be rendered using an array and using map functon

function Section2() {
  return (
    <div className="second-section">
      <h1 className="card-heading">Top sellers</h1>
      <div className="card-container">
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=720"
          }
          rate1="4.86"
          rate2="572"
          country="Poland"
          title="Murder Mystery Escape Room Game-..."
          amount="1,307"
        />
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?im_w=720"
          }
          rate1="4.98"
          rate2="3316"
          country="Italy"
          title="Pasta With The Grandma"
          amount="2,724"
        />
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=720"
          }
          rate1="4.82"
          rate2="120"
          country="France"
          title="'From Paris with Laughs' The Scaveng..."
          amount="1,156"
        />
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=720"
          }
          rate1="4.91"
          rate2="2595"
          country="Spain"
          title="'No Spain No Game' The Fabul;ous Game"
          amount="1,321"
        />
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1658926-poster/original/57e5f8dc-f0fa-4028-89d9-ed9d0e7a92b7.jpeg?im_w=720"
          }
          rate1="4.92"
          rate2="3,348"
          country="Czech"
          title="The Plague Doctor Of Prague- Halloween"
          amount="1,347"
        />
        <Card
          img={
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2533946-media_library/original/752efa36-eced-4845-83d8-734887ee5b66.jpeg?im_w=720"
          }
          rate1="4.98"
          rate2="99"
          country="Spain"
          title="Real Spanish Tapas & Sangria/ Vegan Ok"
          amount="2,476"
        />
      </div>
    </div>
  );
}

export default Section2;
