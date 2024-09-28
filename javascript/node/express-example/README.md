# Express Example

This application is a simple Node.js Express API.

## Technology

- Node.js
- Docker
- Kubernetes

## Running Locally

Before attempting to run this project locally, ensure that port `3000` is available on your machine is not being used by another process.

There are three options for running this project locally.

1. Standalone
2. Using Docker (Recommended)
3. Using Kubernetes

### Standalone

#### Preresiquites

- Node.js

To run this to project without any tooling, you will first need to ensure that all the dependencies are installed using `npm i`. Once you have installed the dependencies you can run `npm run dev` to start up the application. The project should now be up and running, and can be accessed at `http://localhost:3000`.

When you are finished with the application, you can use `ctrl` + `c` to shutdown the application.

### Docker

#### Preresiquites

- Docker

When using docker to run this project, you have an additional two approaches which you can take.

1. Manual
2. Docker Compose

#### Manual

To manually run this project using docker, you will need to first build the docker image which will be used within the container.

After building the image, you can then start up a containerised instance of the application using the newly built image exposing the port 3000 from the container on your local machine.

```bash
# build image name "express-example" and an "example" tag
docker build -t express-example:example .

# start a container with newly built image
docker run -d --name express-example -p 3000:3000 express-example:express
```

The project should now be up and running, and can be accessed at `http://localhost:3000`.

Once you are finished, you can run `docker remove express-example` to tear down and clean up the container.

#### Docker Compose

When using docker compose, you do not need to build the application image manually as docker compose will do this for you.

Simply run the following command to start up the application locally.

```bash
docker compose -p express-example up --build -d
```

The project should now be up and running, and can be accessed at `http://localhost:3000`.

Once you are finished, you can run `docker -p express-example down` to tear down and clean up the container.

### Kubernetes

#### Preresiquites

- Docker
- minikube

1. Create a local kubernetes cluster using `minikube start`
2. Create a deployment of the application using `kubectl apply -f deployment.yml` from the root directory
3. Create a service to expose the application pods publicy using `kubectl apply -f service.yml` from the root directory
4. If you are using minikube with Docker Desktop you will need to use a minikube tunnel by running `minikube service express-example --url` (you will need to use this generated url instead of `http://localhost:3000` to interact with the application)

The project should now be up and running at either `http://localhost:3000` or the url provided by minikube.

Once you have finished using the applcation, make sure to tear down the kubernetes service, deployment and cluster by running the following commands:

```bash
# delete service and deployment
kubectl delete services/express-example deployments/express-example

# tear down cluster
minikube delete
```
