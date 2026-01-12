import Button from "../../UI/button/button";
import Container from "../../UI/container/container";
import classes from "./discoveredSection.module.css";

export default function DiscoveredSection() {
  return (
    <div className={`${classes.background} bg-black h-[475px]`}>
      <Container className="h-full">
        <div className="grid grid-cols-2 py-20 h-full">
          <div className="map"></div>
          <div className="info">
            <h2 className="text-white text-3xl font-bold lg:max-w-[420px]">
              Discover our properties with the best value
            </h2>
            <p className="text-white font-light my-4 lg:max-w-[400px]">
              Explore properties right on the map — see what’s available near
              you in real time
            </p>
            <Button className="py-4">Find the nearest properties →</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
