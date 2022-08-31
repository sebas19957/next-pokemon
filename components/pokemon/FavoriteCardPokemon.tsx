import { FC } from "react";

import { Card, Grid } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} key={id} onClick={onClick}>
      <Card isHoverable isPressable>
        <Card.Body>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt="icono de la app"
            width={250}
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
