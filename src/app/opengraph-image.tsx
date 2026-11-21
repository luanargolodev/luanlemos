import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { ImageResponse } from 'next/og'

import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { getExperienceYears } from '@/lib/dates'

export const alt = site.ogAlt
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const stack = ['React', 'Next.js', 'TypeScript', 'Deco.cx', 'VTEX', 'Shopify']

export default async function OpengraphImage() {
  const [regular, semibold, mark] = await Promise.all([
    readFile(
      path.join(process.cwd(), 'src/assets/fonts/BricolageGrotesque-Regular.ttf'),
    ),
    readFile(
      path.join(
        process.cwd(),
        'src/assets/fonts/BricolageGrotesque-SemiBold.ttf',
      ),
    ),
    readFile(path.join(process.cwd(), 'src/assets/logo-mark.png')),
  ])

  const markSrc = `data:image/png;base64,${mark.toString('base64')}`
  const years = getExperienceYears()

  return new ImageResponse(    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0c',
          color: '#f5f5f4',
          padding: '64px 72px',
          fontFamily: 'Bricolage',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -220,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.40) 0%, rgba(10,10,12,0) 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(129,140,248,0.16) 0%, rgba(10,10,12,0) 70%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 46,
                height: 46,
                borderRadius: 14,
                backgroundColor: '#4f46e5',
              }}
            >
              <img src={markSrc} width={34} height={34} alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                letterSpacing: 1,
                color: '#a8a8b3',
              }}
            >
              luanlemos.dev
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              border: '1px solid #26262f',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 18,
              color: '#a8a8b3',
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                backgroundColor: '#4ade80',
              }}
            />
            {profile.availability}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              letterSpacing: 5,
              textTransform: 'uppercase',
              color: '#a5b4fc',
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 104,
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: -4,
            }}
          >
            Luan Lemos<span style={{ color: '#818cf8' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.35,
              color: '#a8a8b3',
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                border: '1px solid #2f2f3a',
                backgroundColor: '#14141a',
                borderRadius: 999,
                padding: '9px 18px',
                fontSize: 19,
                color: '#d4d4d8',
              }}
            >
              {item}
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              fontSize: 18,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#8a8a95',
            }}
          >
            {years}+ anos · e-commerce
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Bricolage',
          data: regular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Bricolage',
          data: semibold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  )
}
