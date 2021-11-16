const apiServiceFactory = (serviceDeps) => {
    const { store } = serviceDeps;
    const { auth } = store;

    return {
        // api services go in here
    }
}

export default apiServiceFactory;