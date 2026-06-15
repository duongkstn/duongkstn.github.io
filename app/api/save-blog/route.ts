import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { filename, content } = await request.json();

    if (!filename || !content) {
      return NextResponse.json(
        { error: 'Missing filename or content' },
        { status: 400 }
      );
    }

    const blogsDir = join(process.cwd(), 'public', 'blogs');

    // Create directory if it doesn't exist
    if (!existsSync(blogsDir)) {
      mkdirSync(blogsDir, { recursive: true });
    }

    const filepath = join(blogsDir, `${filename}.md`);
    writeFileSync(filepath, content, 'utf-8');

    return NextResponse.json(
      { message: 'Blog saved successfully', filepath },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving blog:', error);
    return NextResponse.json(
      { error: 'Failed to save blog' },
      { status: 500 }
    );
  }
}
