import {
      createContext,
      ReactNode,
      useContext,
      useState,
    } from "react";
    
    interface Payload {
      toggleLoading: () => void,
      loading: boolean
    }

    export const LoadingContext = createContext<Payload | null>(null);
    
    export const LoadingStateContextProvider = ({
      children,
    }: {
      children: ReactNode;
    }) => {
      const [loading, setLoading] = useState<boolean>(false);
    
    
      //DELETE PRODUCT FROM Loading
      const toggleLoading = () => {
            setLoading(loading ? false : true)
      };
    
      return (
        <LoadingContext.Provider
          value={{
            toggleLoading,
            loading
          }}
        >
          {children}
        </LoadingContext.Provider>
      );
    };
    
    export const useLoadingState = () => {
      const context = useContext(LoadingContext);
      if (!context) {
        throw new Error("There is no LoadingStateContextProvider");
      }
    
      return context;
    };
    