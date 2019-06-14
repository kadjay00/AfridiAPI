import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_LAYOUTVERSION', {schema: 'dbo' } )
@Index('UIX_LAYOUTFORMAT_T_SPOTTER_LAYOUTVERSION', ['SPV_LAYOUT_C', 'SPV_FORMAT_C'], {unique: true})
export class T_SPOTTER_LAYOUTVERSION {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SPV_ID_N',
        })
    public SPV_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SPV_LAYOUT_C',
        })
    public SPV_LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SPV_FORMAT_C',
        })
    public SPV_FORMAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPV_VERSION_C',
        })
    public SPV_VERSION_C: string | null;

}
