import { RotatingLines } from "react-loader-spinner";

const Loader = ({ title }: any) => {
  return (
    <>
      <RotatingLines
        visible={true}
        width="200"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      <div>
        <h3 className="text-[50px]">{title}</h3>
      </div>
    </>
  );
};

export default Loader;
