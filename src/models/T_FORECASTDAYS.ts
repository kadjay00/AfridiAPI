import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTDAYS', {schema: 'dbo' } )
export class T_FORECASTDAYS {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FDA_DATE_DAT',
        })
    public FDA_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FDA_SUBDEPARTMENT_N',
        })
    public FDA_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_CENTRALBUDGET_D',
        })
    public FDA_CENTRALBUDGET_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_CENTRALMARGIN_D',
        })
    public FDA_CENTRALMARGIN_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_CENTRALCRACKANDTHEFT_D',
        })
    public FDA_CENTRALCRACKANDTHEFT_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_LOCALBUDGET_D',
        })
    public FDA_LOCALBUDGET_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_LOCALMARGIN_D',
        })
    public FDA_LOCALMARGIN_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 16,
        scale: 6,
        name: 'FDA_LOCALCRACKANDTHEFT_D',
        })
    public FDA_LOCALCRACKANDTHEFT_D: number;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'FDA_CHANGEUSER_C',
        })
    public FDA_CHANGEUSER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'FDA_CHANGEDATE_DAT',
        })
    public FDA_CHANGEDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FDA_PRICECURRENCY_C',
        })
    public FDA_PRICECURRENCY_C: string | null;

}
