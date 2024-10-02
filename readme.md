# How To Use

### System
- node:20-alpine

### Software
- Typescript
- Jest

### Build & Run The Image
Before you enter the commands, make sure that you are at the root directory of this project, which is where the `dockerfile` located.
```bash
# Build a image named "hw"
docker build -t hw .
```
**METHOD 1**<br>
Run a container and execute commands in it:
```bash
# Run a contained also named "hw" from the image
docker run -d --name hw hw tail -f /dev/null
```
Next, log into the container terminal by:
```bash
docker exec -it hw bash
```
Execute commands in the container:
```bash
npm run test:focus
# or
npm test
```

**METHOD 2**<br>
Execute commands and remove the container instantly:
```bash
docker run --rm hw npm run test:focus
# or
docker run --rm hw npm test
```

### Remove The Image and The Container
You can exit the container terminal by:
```bash
exit
```
Then stop and remove the container, so as the image:
```bash
# Stop the container "hw", only for METHOD 1
docker stop hw
# Remove the container "hw", only for METHOD 1
docker rm hw
# Remove the image "hw"
docker rmi hw
```
