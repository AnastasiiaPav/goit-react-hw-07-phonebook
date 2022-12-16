import { Hearts } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}> 
        <Hearts
          height="100"
          width="100"
          color="#d638a9"
          ariaLabel="hearts-loading"
        //   wrapperStyle={{}}
        //   wrapperClass=""
          visible={true}
        />
    </div>
  );
};
