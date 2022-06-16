<template>
  <v-container>
    <v-row class="text-center">
      <v-row>
        <v-col cols="8">
          <TextCard title="地理位置" :body="cardText.geoInfo"/>
        </v-col>
        <v-col cols="4">
          <v-img
            src="https://dimg03.c-ctrip.com/images/100e10000000omtweFC51_R_1600_10000.jpg"
            style="width: 200px; height: 200px; border-radius: 50%"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5.5">
          <v-img
              src="https://dimg03.c-ctrip.com/images/100e10000000omtweFC51_R_1600_10000.jpg"
              position="75% 50%"
              style="width: 200px; height: 200px; border-radius: 50%"
          >
          </v-img>
        </v-col>
        <v-col cols="6">
          <TextCard title="行政区划" :body="cardText.division"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TextCard title="战略地位" :body="cardText.strategic"/>
        </v-col>
        <v-col>
          <v-img
              src="https://dimg03.c-ctrip.com/images/100e10000000omtweFC51_R_1600_10000.jpg"
              style="width: 256px; height: 256px; border-radius: 50%"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
              src="https://dimg03.c-ctrip.com/images/100e10000000omtweFC51_R_1600_10000.jpg"
              style="width: 200px; height: 200px; border-radius: 50%;"
          >
          </v-img>
        </v-col>
        <v-col>
          <TextCard title="气候物产" :body="cardText.climate"/>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TextCard from "@/components/TextCard";

  export default {
    name: 'HelloWorld',
    components: {
      TextCard
    },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      cardText: {
        geoInfo: "烟台，山东省地级市，地处山东半岛东北部，东连威海，南邻青岛，西接潍坊，北濒渤海、黄海，与辽东半岛对峙，与大连隔海相望。",
        division: "烟台全市土地面积13745.9平方千米，海岸线长909千米，濒临渤海、黄海，有岛屿63个。辖芝罘区、莱山区、福山区、牟平区、开发区、高新区、金山港区、昆嵛山自然保护区、长岛县，以及龙口、莱阳、莱州、蓬莱、招远、栖霞、海阳7个县级市。",
        strategic: "烟台是环渤海经济圈内重要节点城市、山东半岛蓝色经济区骨干城市、中国首批14个沿海开放城市之一，亚洲唯一的国际葡萄·葡萄酒城、“一带一路”国家战略重点建设港口城市、是国家历史文化名城，全国文明城市。烟台交通便利，与大连的轮渡，缩短了胶东半岛和辽东半岛的距离。青烟，威荣城际轻轨铁路，将胶东半岛城市群快速连通。烟台国际机场现有五十多条国内外航线，连接韩国首尔、日本大阪、香港、台北、北京、上海等。",
        climate: "烟台温带海洋性气候特征明显，阳光充足，四季分明。这里冬无严寒不干燥，夏无酷暑不潮湿，自然环境得天独厚。烟台被誉为鲁菜之乡，这里物产丰富，水果、海产品享誉海内外。"
      }
    }),
  }
</script>
