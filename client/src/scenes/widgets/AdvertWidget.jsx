import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Bounty Posters
        </Typography>
        <Typography color={medium}>Add Bounty</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/shanks.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Red Hair Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Red-Haired Pirates, led by the Shanks, are a legendary crew known for their honor and strength on the Grand Line.
        Shanks, with his iconic straw hat and missing arm, symbolizes the spirit of adventure and camaraderie among pirates.
        These pirates are renowned for their daring exploits and their connections to Monkey D. Luffy, adding to their mystique in the world of 'One Piece'.
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/gold.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Gold Rogers Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Gold Roger Pirates, captained by the legendary Gol D. Roger, were the first to conquer the Grand Line and discover the One Piece, sparking the Great Pirate Era.
        Their adventures and discoveries paved the way for a new era of piracy, inspiring countless pirates, including the protagonist, Monkey D. Luffy, to seek their own dreams on the seas.
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/luffy.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Monkey D. Luffy, the fearless and rubber-bodied captain of the Straw Hat Pirates, with a bounty as boundless as his dreams.
        Known for his iconic straw hat and a penchant for causing chaos wherever he goes, Luffy is a symbol of unpredictable adventure on the Grand Line.
        Wanted for his relentless pursuit of the legendary One Piece, beware of the Straw Hat Pirate Captain's powerful crew and unwavering resolve!
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/kaido.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Beast Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Kaido, the indomitable 'Beast Pirates' captain, is known as the 'Strongest Creature in the World,' with a reputation for being nigh-invulnerable.
        Feared across the New World for his immense strength and his dragon-human hybrid form, Kaido is infamous for his invincibility and his relentless pursuit of an ultimate war.
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/white.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Whitebeard Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Whitebeard, the legendary 'Captain of the Whitebeard Pirates,' was revered as the 'Strongest Man in the World' and a father figure to his crew.
        With his power to create earthquakes and his immense loyalty to his 'sons' and 'daughters,' Whitebeard was a symbol of strength, family, and honor on the Grand Line.
        Feared by his enemies and respected by his allies, his desire for a 'family of brothers' and his pursuit of 'One Piece' left an indelible mark on the world of pirates.
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/zoro.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Roronoa Zoro, the fearsome swordsman of the Straw Hat Pirates, wields three swords and aspires to become the world's greatest swordsman.
        Known for his dedication to his captain, Monkey D. Luffy, and his unwavering pursuit of strength, Zoro's dream is to defeat Dracule Mihawk and claim the title of 'king of hell'.
      </Typography>



      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/robin.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Nico Robin, the enigmatic 'Devil Child,' is an archaeologist and member of the Straw Hat Pirates, sought for her knowledge of the ancient history of the world.
        Her ability to produce extra limbs with the 'Hana Hana no Mi' Devil Fruit and her quest to uncover the Void Century's secrets make her a vital asset and a symbol of mystery among the crew
      </Typography>





      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/kid.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Kid Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Eustass "Captain" Kid, recognized by his distinctive metal arm and fiery red hair, is a formidable and ruthless pirate captain with a reputation for destruction and a relentless pursuit of becoming the Pirate King.
        His menacing presence and magnetic powers, courtesy of the Magnet-Magnet Fruit, make him a force to be reckoned with in the world of "One Piece".
      </Typography>








      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/bigmom.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Big Mom Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Charlotte Linlin, infamously known as "Big Mom," is one of the Yonko, the four most powerful pirates in the world.
        With her imposing stature, extravagant attire, and a love for sweets, she commands the Big Mom Pirates and the vast territory of Totto Land.
        Her terrifying Devil Fruit ability, the Soru Soru no Mi, grants her control over souls and homies
      </Typography>








      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/bullet.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Gold Rogers Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Bullet, known as "The Demon Heir," is a colossal and fearsome pirate with a hulking frame and a penchant for destruction.
        Has immense strength and the power of the Gasha Gasha no Mi, a Paramecia-type Devil Fruit.
      </Typography>




      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ussop.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Usopp, often mistaken for the "Soge King," is the Straw Hat Pirates' sharpshooter and a master storyteller. With his long nose, signature goggles, and ever-evolving arsenal, he brings a mix of humor and courage to the crew.
        Usopp's tales of legendary feats are as renowned as his incredible marksmanship, and his dream is to become a brave warrior of the sea like his father.
      </Typography>




      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/nami.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Nami, the "Cat Burglar," is the Straw Hat Pirates' skilled navigator and cartographer.
        Her captivating orange hair, signature blue and white striped shirt, and a love for treasure make her easily recognizable.
      </Typography>




      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          <br></br>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/chopper.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Straw Hat Pirates</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Tony Tony Chopper, affectionately known as "Cotton Candy Lover" Chopper, is a small and adorable reindeer-like creature with blue skin and a penchant for sweets.
        He is a valued member of the Straw Hat Pirates, recognized for his unique ability to transform into various forms due to the Human-Human Fruit
      </Typography>
    </WidgetWrapper>

  );
};

export default AdvertWidget;
