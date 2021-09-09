# HPE Ezmeral Container Platform - WebApp
Sample NodeJS app based on the Express web application framework that provides a robust set of features for web and mobile applications.
It's mainly used to demonstrate container deployments on HPE Ezmeral Container Platform running both stateless & statefull applications.   Use the following files for K8s setup: <br>
- [**webapp.yaml**](https://github.com/StefDS/webapp/blob/master/k8s/webapp.yaml) for POD deployment & stateless service endpoint definitions in native K8s.
- [**webapp-kubedir.json**](https://github.com/StefDS/webapp/blob/master/k8s/webapp-kubedir.json) for the deployment of statefull applications using [KubeDirector](https://github.com/bluek8s/kubedirector) to demonstrate the use of stateful scaleout application clusters.

More info in the [HPE Ezmeral Container Platform docs](https://docs.containerplatform.hpe.com/home)
