import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_MYCAD_EXTRA', {schema: 'dbo' } )
export class T_SPY_MYCAD_EXTRA {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 12,
        scale: 0,
        name: 'SPE_ID_N',
        })
    public SPE_ID_N: number;

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:12,
        // scale:0,
        name: 'SPE_SEQ_N',
        })
    public SPE_SEQ_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SPE_DATE_DAT',
        })
    public SPE_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPE_TYPE_C',
        })
    public SPE_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 500,
        name: 'SPE_TEXT_C',
        })
    public SPE_TEXT_C: string | null;

}
