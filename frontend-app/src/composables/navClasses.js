import { useRoute } from 'vue-router';
export const useNavClasses = () => {
    const route = useRoute();

    // helper functions
    const getNavIconClass = (routePath) => {
        const route = useRoute();
        return [route.path === routePath ? 'text-white' : 'text-gray-dark hover:text-gray-light', 'fill-current'];
    };

    const getNavTextClass = (routePath) => {
        const route = useRoute();
        return [route.path === routePath ? 'text-gray-light' : 'text-gray-light hover:text-white'];
    };

    return { getNavIconClass, getNavTextClass};
}