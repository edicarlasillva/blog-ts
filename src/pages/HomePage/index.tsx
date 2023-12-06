import { Header } from "../../components/Header";
import { PostList } from "../../components/PostList";

import { posts } from "../../posts";

import { Container, Wrapper } from "./styles";

export function HomePage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <PostList posts={posts} />
        </Container>
      </Wrapper>
    </>
  );
}
